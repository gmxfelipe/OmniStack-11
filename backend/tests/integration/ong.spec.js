const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    // Teste de integração

    it('should be able to create a new ONG', async () => {
        const response = await request(app) 
        .post('/ongs')
        .send({
            name: "FIEC-4",
            email: "fiec@gmail.com",
            whatsapp: "10102020",
            city: "Idaiatuba",
            uf: "SP"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLenght(id);
    });
});

