require "test_helper"

class EmergenciesControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get emergencies_show_url
    assert_response :success
  end
end
