const {format_date} = require('../utils/helpers');



test('format_date() returns a date string', () => {
    const date = new Date('2022-03-12 08:10:03');
  
    expect(format_date(date)).toBe('3/12/2022');
});