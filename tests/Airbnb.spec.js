
import{test,expect} from '@playwright/test'
		   
test("basictestairbnb",async ({page})=>{


await page.getByTestId('structured-search-input-field-query').click();
await page.getByPlaceholder('button',{name:'Europe'}).click()
await page.getByLabel('25, Monday, November 2024').click()
// await page.getByTestId("structured-search-input-search-button").click()


})

