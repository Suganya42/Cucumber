package com.stepdefinition;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class BillPaying {
	static WebDriver driver;
	@Given("User navigates to the pay billing page")
	public void user_navigates_to_the_pay_billing_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Ganya\\eclipse-workspace\\Suganay_workspace\\Cucumber\\Webdriver\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/");
		driver.findElement(By.xpath("(//a[text()='Pay Billing'])[1]")).click();
		
	}

	@When("User enters the id and click submit button")
	public void user_enters_the_id_and_click_submit_button(DataTable payBillingTable) {
		List<String> payBillingList = payBillingTable.asList(String.class);
		System.out.println(payBillingList);
		driver.findElement(By.id("customer_id")).sendKeys(payBillingList.get(0));
		driver.findElement(By.xpath("//input[@value='submit']")).click();
		
	    
	}

	@Then("User succesfully getting the pay billing details")
	public void user_succesfully_getting_the_pay_billing_details() {
		Assert.assertTrue(driver.findElement(By.tagName("h1")).isDisplayed());
	 
	}

}
