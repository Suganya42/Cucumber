Feature: Title of your feature
  I want to use this template for my feature file

  @tag1
  Scenario: Title of your scenario
    Given User need to click the add customer button to navigate
    When User filling all the vaild details in fields
      | FirstName | Selenium      |
      | LastName  | Test          |
      | Email     | sel@gmail.com |
      | Address   | OMR           |
      | Phone     |    0987654321 |
    And User click the button called add customer
    Then User get the customer id in end
