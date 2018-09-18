let r = require('request');

describe('test request', () => {

  it('should request some page', () => {

    let getInfo = 1;

    console.log('---=Start=---');
    // const req = request();
    r.get('https://petstore.swagger.io/v2/store/inventory', (error, response, body) => {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      getInfo = JSON.parse(body);
      console.log('body:', getInfo['taken']); // Print the HTML for the Google homepage.
    });


    expect(getInfo['taken']).toEqual(1);

  });

});
