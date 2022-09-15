import { expect , assert} from "chai";
import testUtils from "./utils";

/**
 * Uses MOCHA https://mochajs.org/
 * Uses CHAI https://www.chaijs.com/api/bdd/
 * Uses WebDriverIO https://webdriver.io/
 * 
 */
describe("application launch", function() {
  beforeEach(testUtils.beforeEach);
  afterEach(testUtils.afterEach);

  it("Shows a Map", async function() {

    return await this.app.client.$(".ol-viewport").then(element => {
      assert.exists(element,'Element exists');
    });
  });
});
