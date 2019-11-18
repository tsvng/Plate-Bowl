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
public class bucket_list_test {
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
  public void bucketlisttest() {
    driver.get("https://master.d1artn8nksk20o.amplifyapp.com/");
    driver.manage().window().setSize(new Dimension(1288, 1020));
    driver.findElement(By.id("SignInButton")).click();
    driver.findElement(By.id("floating-button")).click();
    driver.findElement(By.linkText("Bucket List")).click();
    driver.findElement(By.id("myInput")).click();
    driver.findElement(By.id("myInput")).sendKeys("French");
    driver.findElement(By.cssSelector(".addBtn")).click();
    driver.findElement(By.cssSelector("li:nth-child(7)")).click();
    driver.findElement(By.cssSelector(".checked:nth-child(7)")).click();
    driver.findElement(By.cssSelector("li:nth-child(7) > .close")).click();
    driver.findElement(By.cssSelector("li:nth-child(1)")).click();
    driver.findElement(By.cssSelector(".checked:nth-child(2)")).click();
    driver.findElement(By.cssSelector("li:nth-child(3)")).click();
    driver.findElement(By.cssSelector(".checked:nth-child(1)")).click();
    driver.findElement(By.cssSelector("li:nth-child(2)")).click();
    driver.findElement(By.cssSelector(".checked:nth-child(3)")).click();
  }
}
