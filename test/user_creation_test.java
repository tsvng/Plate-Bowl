import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.core.IsNot.not;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Alert;
import org.openqa.selenium.Keys;
import java.util.*;
public class user_creation_test {
  private WebDriver driver;
  private Map<String, Object> vars;
  JavascriptExecutor js;
  @Before
  public void setUp() {
    driver = new ChromeDriver();
    js = (JavascriptExecutor) driver;
    vars = new HashMap<String, Object>();
  }
  @After
  public void tearDown() {
    driver.quit();
  }
  @Test
  public void usercreationtest() {
    driver.get("https://master.d1artn8nksk20o.amplifyapp.com/index.html");
    driver.manage().window().setSize(new Dimension(1288, 1020));
    driver.findElement(By.id("SignInButton")).click();
    driver.findElement(By.linkText("Sign up")).click();
    driver.findElement(By.name("username")).click();
    driver.findElement(By.name("username")).sendKeys("testuser001");
    driver.findElement(By.name("requiredAttributes[name]")).sendKeys("test user");
    driver.findElement(By.name("requiredAttributes[email]")).sendKeys("d814093@urhen.com");
    driver.findElement(By.name("password")).click();
    driver.findElement(By.name("password")).sendKeys("testuser001");
    driver.findElement(By.name("signUpButton")).click();
    driver.findElement(By.id("verification_code")).click();
    driver.findElement(By.id("verification_code")).sendKeys("201351");
    driver.findElement(By.name("confirm")).click();
  }
}
