
///<reference types ="Cypress"/>

import MyStore from '../../../../PageObject/MyStore.page';

describe("Registration in My Store",()=>{
    
 const signup =  new MyStore()
 let m :any ;

    beforeEach("fixture",()=>{
      cy.visit("/")
    cy.fixture('example').then((user)=>{
   m = user;
        })
    })
beforeEach("Enter email to create Account ",()=>{
  signup.create_Account(m.email1)
    })
   it.skip("Create an Account",()=>{
     signup.title()
     signup.name("Avi")
     signup.lastName("Gupta")
     signup.email()
     signup.password("haider5555")
     signup.DOB()
     signup.company("ABC")
     signup.address("Greater Noida")
     signup.address2("Delhi")
     signup.city("Noida")
     signup.state("Alaska")
     signup.postcode("66678")
     signup.other("yes i review ")
     signup.phone("8877543990")
     signup.phone1("8666544")
     signup.alias("prove it")
     signup.submit()
     signup.userAccount().should("be.visible")
   })
   it("User will enter without any field and registration only submit button",()=>{
      signup.clickSubmit().should("be.visible")
   })
   it.skip("User will not enter first name and failed Registration",()=>{
    signup.title()
    signup.lastName("Gupta")
    signup.email()
    signup.password("haider5555")
    signup.DOB()
    signup.company("ABC")
    signup.address("Greater Noida")
    signup.address2("Delhi")
    signup.city("Noida")
    signup.state("Alaska")
    signup.postcode("66678")
    signup.other("yes i review ")
    signup.phone("8877543990")
    signup.phone1("8666544")
    signup.alias("prove it")
    signup.submit()
    signup.failedFirstName().should("be.visible")
})
it.skip("User will registrationt without enter the password failed ",()=>{
  signup.title()
  signup.name("Avi")
  signup.lastName("Gupta")
  signup.email()
  signup.DOB()
  signup.company("ABC")
  signup.address("Greater Noida")
  signup.address2("Delhi")
  signup.city("Noida")
  signup.state("Alaska")
  signup.postcode("66678")
  signup.other("yes i review ")
  signup.phone("8877543990")
  signup.phone1("8666544")
  signup.alias("prove it")
  signup.submit()
  signup.failedFirstName().should("be.visible")
  signup.filledRegistration().should("be.visible")
})
it.skip("User will registrationt without enter the DATE Of birth sucessfully ",()=>{
  signup.title()
  signup.name("Avi")
  signup.lastName("Gupta")
  signup.email()
  signup.password("haider5555")
  signup.company("ABC")
  signup.address("Greater Noida")
  signup.address2("Delhi")
  signup.city("Noida")
  signup.state("Alaska")
  signup.postcode("66678")
  signup.other("yes i review ")
  signup.phone("8877543990")
  signup.phone1("8666544")
  signup.alias("prove it")
  signup.submit()
})
it.only("User will without registration name,phone,state,password ",()=>{
  signup.title()
  signup.lastName("Gupta")
  signup.email()
  signup.company("ABC")
  signup.address("Greater Noida")
  signup.address2("Delhi")
  signup.city("Noida")
  signup.postcode("66678")
  signup.other("yes i review ")
  signup.phone1("8666544")
  signup.alias("prove it")
  signup.submit()
  signup.withoutPass_Ph_St_Name().should("be.visible")
})
})
