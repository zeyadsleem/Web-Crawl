import { normalizeURL, getURLsFromHTML } from './crawl.mjs'
import { test, expect } from 'vitest'

test('normalizeURL protocol', () => {
  const input = 'https://mail.google.com/path'
  const actual = normalizeURL(input)
  const expected = 'mail.google.com/path'
  expect(actual).toEqual(expected)
})

test('normalizeURL slash', () => {
  const input = 'https://mail.google.com/path/'
  const actual = normalizeURL(input)
  const expected = 'mail.google.com/path'
  expect(actual).toEqual(expected)
})

test('normalizeURL capitals', () => {
  const input = 'https://mail.google.com/path'
  const actual = normalizeURL(input)
  const expected = 'mail.google.com/path'
  expect(actual).toEqual(expected)
})

test('normalizeURL http', () => {
  const input = 'http://mail.google.com/path'
  const actual = normalizeURL(input)
  const expected = 'mail.google.com/path'
  expect(actual).toEqual(expected)
})

test('getURLsFromHTML absolute', () => {
  const inputURL = 'https://mail.google.com'
  const inputBody = '<html><body><a href="https://mail.google.com"><span>google.com></span></a></body></html>'
  const actual = getURLsFromHTML(inputBody, inputURL)
  const expected = ['https://mail.google.com/']
  expect(actual).toEqual(expected)
})

test('getURLsFromHTML relative', () => {
  const inputURL = 'https://mail.google.com'
  const inputBody = '<html><body><a href="/path/one"><span>google.com></span></a></body></html>'
  const actual = getURLsFromHTML(inputBody, inputURL)
  const expected = ['https://mail.google.com/path/one']
  expect(actual).toEqual(expected)
})

test('getURLsFromHTML both', () => {
  const inputURL = 'https://mail.google.com'
  const inputBody = '<html><body><a href="/path/one"><span>google.com></span></a><a href="https://other.com/path/one"><span>google.com></span></a></body></html>'
  const actual = getURLsFromHTML(inputBody, inputURL)
  const expected = ['https://mail.google.com/path/one', 'https://other.com/path/one']
  expect(actual).toEqual(expected)
})

test('getURLsFromHTML handle error', () => {
  const inputURL = 'https://mail.google.com'
  const inputBody = '<html><body><a href="path/one"><span>google.com></span></a></body></html>'
  const actual = getURLsFromHTML(inputBody, inputURL)
  const expected = []
  expect(actual).toEqual(expected)
})

