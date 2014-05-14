'use strict';

describe('todo list', function() {
  it('adds todos', function() {
    browser.get('/');

    element(by.model('newTodo.title')).sendKeys('Buy Milk');

    var todoList = element.all(by.repeater('todo in todos'));

    expect(todoList.count()).toEqual(1)
    expect(todoList.get(0).getText()).toEqual("Buy Milk")
  });

  it('adds more todos', function() {
    browser.get('/');

    element(by.model('newTodo.title')).sendKeys('Buy Potatoes');

    var todoList = element.all(by.repeater('todo in todos'));

    expect(todoList.count()).toEqual(1)
    expect(todoList.get(0).getText()).toEqual("Buy Potatoes")
  });
});
