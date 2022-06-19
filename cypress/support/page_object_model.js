///<reference types="Cypress"  />

class SearhCountry{

    getCountryInformationFromApi(){
         cy.request({
            url: 'https://restcountries.com/v3.1/all',
            method: "GET",
            failOnStatusCode: false,

        }).then(response=>{
           let arrayOfCountry=response.body
           for(let i=95;i<105;i++){
            cy.log(arrayOfCountry[i].name.common)
            let country=arrayOfCountry[i]
            this.navigateToWikipediaPage(country)
           }
        })
    }


    navigateToWikipediaPage(country){
        cy.log(country)
        cy.visit('https://www.google.com/?hl=en')
        cy.get('input[title="Search"]').eq(0).type(country.name.common).type('{enter}')
        cy.get(`[href="https://en.wikipedia.org/wiki/${(country.name.common).split(" ").join("_")}"]`).eq(0).click()
        //Check country  name
        cy.get('#firstHeading').should('have.text',country.name.common)
        //Check country capital city
        cy.get(' td[class="infobox-data"] a').eq(0).should('have.text',country.capital[0])
      
}
}
export default SearhCountry