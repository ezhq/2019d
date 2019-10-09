suite('"About" Page Tests', () => {
    test('page should contain link to contact page', function () {
        assert($('a[href="/contact"]').length)
    })
})