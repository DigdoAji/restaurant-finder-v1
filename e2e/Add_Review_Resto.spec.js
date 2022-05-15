const assert = require('assert');

Feature('Add Review Restaurant');

Before(({ I }) => {
    I.amOnPage('/');
});

Scenario('Adding Review restaurant', async ({ I }) => {
    I.see('Loading Data......', "#loading");
    I.wait(1);

    I.seeElement('.card-item');
    I.seeElement('.resto-item__title a');
    
    const findResto = locate('.resto-item__title a').first();
    I.wait(1);
    I.click(findResto);

    I.seeElement('.form-row');
    I.seeElement('#inputName');
    I.fillField('#inputName', 'Handa');

    I.seeElement('.form-row');
    I.seeElement('#inputReview');
    I.fillField('#inputReview', 'Tidak Ramah Bintang 1');

    I.seeElement('#submitReview');
    I.click('#submitReview');

    const getName = locate('.comment-item__title h1').last();
    const checkInput = await I.grabTextFrom(getName);

    const getReview = locate('.comment-item__content p').last();
    const checkReview = await I.grabTextFrom(getReview);

    assert.strictEqual(checkInput, 'Handa');
    assert.strictEqual(checkReview, 'Tidak Ramah Bintang 1');
});