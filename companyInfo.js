var faker = require('faker')

module.exports = function generateCompanyInfo(){
    var company = []
    for (var id = 1; id <= 20; id++) {
    var companyName = faker.company.companyName()
    var companySuffix = faker.company.companySuffix()
    var companyUrl = faker.internet.url()
    var companyAccountName = faker.finance.accountName()
    var companyAccount = faker.finance.account()
    var companyProductName = faker.commerce.productName()
      company.push({
        "company_id":id,
        "company_name":companyName,
        "company_suffix":companySuffix,
        "company_url":companyUrl,
        "compnay_finance":{
            "compnay_account_name":companyAccountName,
            "company_account":companyAccount,
            "company_product_name":companyProductName
        }
      })
  
    }
  
    return { "company": company }   
}