package com.stepdefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class CustomerAdding {
	static WebDriver driver; 
	@Given("The user is in telecom home page")
	public void the_user_is_in_telecom_home_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Ganya\\eclipse-workspace\\Suganay_workspace\\Cucumber\\Webdriver\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/");

	}

	@Given("The user click on add customer")
	public void the_user_click_on_add_customer() {
		driver.findElement(By.xpath("(//a[text()='Add Customer'])[1]")).click();
	    
	}

	@When("User is filling all the fields")
	public void user_is_filling_all_the_fields() {
		driver.findElement(By.xpath("//label[@for='done']")).click();
		driver.findElement(By.id("fname")).sendKeys("Suganya");
		driver.findElement(By.id("lname")).sendKeys("Rajan");
		driver.findElement(By.id("email")).sendKeys("suganya@gmail.com");
		driver.findElement(By.name("addr")).sendKeys("Velachery");
		driver.findElement(By.name("telephoneno")).sendKeys("1234567890");

	}

	@When("User click on submit button")
	public void user_click_on_submit_button() {
		driver.findElement(By.xpath("//input[@name='submit']")).click();
	
	}

	@Then("The user should be displayed the customer id")
	public void the_user_should_be_displayed_the_customer_id() {
		Assert.assertTrue(driver.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
	}

}
