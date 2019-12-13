require('rspec')
require('main')

describe('Test#main') do
  it('test;sdafs') do
    tester = Test.new()
    expect(tester.main(0)).to(eq(0))
  end
end
