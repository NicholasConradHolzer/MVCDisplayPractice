const {format_date, format_plurals} = require('../utils/helpers');


test('format_plurals() adds "s" to words of multiple', () =>
{ expect(format_plurals('cap',1)).toBe('cap');
expect(format_plurals('cappy', 3)).toBe('cappys')});

test('format_date() returns a date string', () => {
    const date = new Date('2022-03-12 08:10:03');
  
    expect(format_date(date)).toBe('3/12/2022');
});