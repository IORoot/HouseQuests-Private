describe('Test HouseQuests Title', () => {
    it('should open app and check the title version', async () => {
        await expect(browser).toHaveTitle('HouseQuests ' + process.env.npm_package_version)
    })
})
