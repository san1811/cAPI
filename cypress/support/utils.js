// Define a custom function to handle the API request and assertions
export function handleCalendarAPIRequest(methodName, apiUrl, accessToken, requestBody) {
  if (requestBody) {
    return cy.request({
      method: methodName,
      url: apiUrl,
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: requestBody
    }).then((response) => {
      return response;
    });
  } else {
    return cy.request({
      method: methodName,
      url: apiUrl,
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      return response;
    });
  }
}

export function getTomorrowTimestamp(hour, minute, timezoneOffset) {
  const currentDate = new Date();

  const tomorrowDate = new Date(currentDate);
  tomorrowDate.setDate(currentDate.getDate() + 1);

  tomorrowDate.setHours(hour);
  tomorrowDate.setMinutes(minute);

  const adjustedDate = new Date(tomorrowDate.getTime() - (timezoneOffset * 60000));
  return adjustedDate.toISOString().slice(0, -5) + "+05:30";
}