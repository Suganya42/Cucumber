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

public class Steps {
	static WebDriver driver;
	@Given("User need to click the add customer button")
	public void user_need_to_click_the_add_customer_button() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Ganya\\eclipse-workspace\\Suganay_workspace\\Cucumber\\Webdriver\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/");
		driver.findElement(By.xpath("(//a[text()='Add Customer'])[1]")).click();
	    
	}

	@When("User filling all the vaild details")
	public void user_filling_all_the_vaild_details(DataTable customerDetailsTable) {
		List<String> customerDetailsList = customerDetailsTable.asList(String.class);
		System.out.println(customerDetailsList);
		driver.findElement(By.id("fname")).sendKeys(customerDetailsList.get(0));
		driver.findElement(By.id("lname")).sendKeys(customerDetailsList.get(1));
		driver.findElement(By.id("email")).sendKeys(customerDetailsList.get(2));
		driver.findElement(By.name("addr")).sendKeys(customerDetailsList.get(3));
		driver.findElement(By.name("telephoneno")).sendKeys(customerDetailsList.get(4));
	    
	}

	@When("User click the button add customer")
	public void user_click_the_button_add_customer() {
		driver.findElement(By.xpath("//input[@name='submit']")).click();
	    
	}

	@Then("User get the customer id")
	public void user_get_the_customer_id() {
		Assert.assertTrue(driver.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
	    
	}

}
