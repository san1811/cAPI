import * as utils from "../../support/utils";

describe('Create Event Test', () => {
  let eventID = "";
  let beforeEventLength = 0;
  const accessToken = 'ya29.a0AfB_byD3M5aMm709yu_Ct_sU2aWKOVkl4hF4FnmdyN3FG8hQg2PtwmQGX0_q4wtfR40DhwvnZ8vUYhDao4DF9dzQPH1fPO20FiDYh3cbLpoxzIRIkF-0FaPgWp_FNUIWTrmWOa0xnhxghtwdPime_lgiphPw89W65XenJ8IaCgYKAS4SARESFQHGX2Mi5i494GxHDU1pr_h9I7iIoQ0174';

  beforeEach(() => {
    utils.handleCalendarAPIRequest('GET', 'https://www.googleapis.com/calendar/v3/calendars/primary/events', accessToken)
      .then((response) => {
        expect(response.status).to.eq(200);
        beforeEventLength = response.body.items.length;
      });
  });

  it('Should create the event', () => {
    let afterEventLength;
    const summaryText = 'Sample Avoma Event';
    const startTime = utils.getTomorrowTimestamp(10, 0, 330);
    const endTime = utils.getTomorrowTimestamp(11, 0, 330);

    const requestBody = {
      summary: summaryText,
      start: {
        dateTime: startTime
      },
      end: {
        dateTime: endTime
      }
    };

    utils.handleCalendarAPIRequest('POST', 'https://www.googleapis.com/calendar/v3/calendars/primary/events', accessToken, requestBody).then((response) => {
      expect(response.status).to.equal(200);
      eventID = response.body.id;
      expect(eventID).to.be.not.null;
      expect(response.body.status).to.eq("confirmed");
      expect(response.body.summary).to.eq(summaryText);
      expect(response.body.start.dateTime).to.eq(startTime);
      expect(response.body.end.dateTime).to.eq(endTime);
    });

    // Check event count
    utils.handleCalendarAPIRequest('GET', 'https://www.googleapis.com/calendar/v3/calendars/primary/events', accessToken).then((response) => {
      expect(response.status).to.eq(200);
      afterEventLength = response.body.items.length;
      expect(afterEventLength).to.eq(beforeEventLength + 1);
      beforeEventLength += 1;
    });
  });

  it('Should delete the event', () => {
    // Send a DELETE request to delete the event
    let afterEventLength;
    utils.handleCalendarAPIRequest('DELETE', `https://www.googleapis.com/calendar/v3/calendars/primary/events/${eventID}`, accessToken).then((response) => {
      expect(response.status).to.eq(204);
    });

    utils.handleCalendarAPIRequest('GET', `https://www.googleapis.com/calendar/v3/calendars/primary/events`, accessToken).then((response) => {
      expect(response.status).to.eq(200);
      afterEventLength = response.body.items.length;
      expect(afterEventLength).to.eq(beforeEventLength - 1);
      beforeEventLength -= 1;
    });
  });
});
