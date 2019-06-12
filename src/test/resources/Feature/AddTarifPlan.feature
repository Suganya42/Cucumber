Feature: Title of your feature
  I want to use this template for my feature file

  Scenario Outline: Title of your scenario outline
    Given User need to navigate to the add tarif plan page
    When User fill the informations"<MonthlyRent>","<LocalMin>","<IntMin>","<SmsPack>","<MinCharge>","<IntCharge>","<SmsCharge>"
    And USer click the submit button
    Then Successfully tarif plan added

    Examples: 
      | MonthlyRent | LocalMin | IntMin | SmsPack | MinCharge | IntCharge | SmsCharge |
      |        7000 |      100 |    200 |     300 |        40 |        50 |        60 |
      |        9000 |      200 |    300 |     400 |        50 |        60 |        70 |
      |        4000 |      300 |    400 |     500 |        60 |        70 |        80 |
