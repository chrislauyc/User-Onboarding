describe('testing. cypress please work!',()=>{
    it('please work!',()=>{
        cy.visit('localhost:3000')
        expect(true).to.equal(true);
    })
})