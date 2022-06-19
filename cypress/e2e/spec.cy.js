import SearhCountry from '../support/page_object_model'

describe('empty spec', () => {
  const searchCountry=new SearhCountry()    

  
  it('passes', () => {
      searchCountry.getCountryInformationFromApi()
  })
})