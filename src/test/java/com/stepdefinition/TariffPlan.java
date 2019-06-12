package com.stepdefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class TariffPlan {
	static WebDriver driver;
	@Given("User need to navigate to the add tarif plan page")
	public void user_need_to_navigate_to_the_add_tarif_plan_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Ganya\\eclipse-workspace\\Suganay_workspace\\Cucumber\\Webdriver\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/");
		driver.findElement(By.xpath("(//a[text()='Add Tariff Plan'])[1]")).click();
	    
	}

	@When("User fill the informations{string},{string},{string},{string},{string},{string},{string}")
	public void user_fill_the_informations(String monRent, String feeLoc, String feeInt, String freeSms, String minCharge, String intCharge, String smsCharge) {
		driver.findElement(By.id("rental1")).sendKeys(monRent);
		driver.findElement(By.id("local_minutes")).sendKeys(feeLoc);
		driver.findElement(By.id("inter_minutes")).sendKeys(feeInt);
		driver.findElement(By.id("sms_pack")).sendKeys(freeSms);
		driver.findElement(By.id("minutes_charges")).sendKeys(minCharge);
		driver.findElement(By.id("inter_charges")).sendKeys(intCharge);
		driver.findElement(By.id("sms_charges")).sendKeys(smsCharge);
		
	}

	@When("USer click the submit button")
	public void user_click_the_submit_button() {
		driver.findElement(By.xpath("//input[@value='submit']")).click();
	    
	}

	@Then("Successfully tarif plan added")
	public void successfully_tarif_plan_added() {
	    Assert.assertTrue(driver.findElement(By.tagName("h2")).isDisplayed());
	}

}
