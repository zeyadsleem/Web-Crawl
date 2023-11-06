import { expect, test } from 'vitest';
import { normalizeURL } from "./crawl.mjs";

test('normalizeURL strip protocol', () => {
  const input = 'https://mail.google.com/mail';
  const actual = normalizeURL(input);
  const expected = 'mail.google.com/mail';
  expect(actual).toEqual(expected);
})

test('normalizeURL strip slash', () => {
  const input = 'https://mail.google.com/mail/';
  const actual = normalizeURL(input);
  const expected = 'mail.google.com/mail';
  expect(actual).toEqual(expected);
})

test('normalizeURL Capitals', () => {
  const input = 'https://mail.Google.com/mail/';
  const actual = normalizeURL(input);
  const expected = 'mail.google.com/mail';
  expect(actual).toEqual(expected);
})

test('normalizeURL strpi http', () => {
  const input = 'https://mail.Google.com/mail/';
  const actual = normalizeURL(input);
  const expected = 'mail.google.com/mail';
  expect(actual).toEqual(expected);
})
