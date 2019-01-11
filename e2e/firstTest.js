import commonSelectors from './selectors/commonSelectors';
import descriptionContent from './selectors/descriptionContent';

const commonSelector = new commonSelectors;
const categoryDescriptionItems = { Kids: 1, Home: 5, Auto: 5, Food: 1 };

fixture`Testing product app`// declare the fixture
    .page`http://localhost:3000/`;

test('Check description from the first selected option', async t => {
    await t
        .click(commonSelector.getAllCheckBoxes().nth(0))
        .expect(Boolean(commonSelector.getAllCheckBoxes().nth(0).child().value)).eql(true)
        .expect(commonSelector.getText().textContent).eql(descriptionContent.description_kids);
});
test('Check addToCart functionality', async t => {
    await t
        .setNativeDialogHandler(() => true)
        .click(commonSelector.getButton())
        .click(commonSelector.getAllCheckBoxes().nth(0))
        .expect(Boolean(commonSelector.getAllCheckBoxes().nth(0).child().value)).eql(true);
});
test('Check all checkbox items', async t => {
    Object.keys(categoryDescriptionItems).map(async option => {
        await t.click(commonSelector.getAllCheckBoxes().withText(option))
            .expect(Boolean(commonSelector.getAllCheckBoxes().nth(0).child().value)).eql(true);
    });
});
test('Uncheck all checkbox items', async t => {
    Object.keys(categoryDescriptionItems).map(async option => {
        await t.click(commonSelector.getAllCheckBoxes().withText(option))
            .expect(Boolean(commonSelector.getAllCheckBoxes().nth(0).child().value)).eql(false);
    });
});
test('Check if selecting a category contains the right number of description items', async t => {
    await Promise.all(Object.entries(categoryDescriptionItems).map(async (items, index) => {
        const [option, descriptionLength] = [...items];
        const cardListItems = commonSelector.getAllCardList().child();
        const checkBoxItem = commonSelector.getAllCheckBoxes().nth(index).withText(option);
        await t.click(checkBoxItem)
            .expect(cardListItems.find('.description').count).eql(descriptionLength)
            .click(commonSelector.getAllCheckBoxes().withText(option))
    }));
});