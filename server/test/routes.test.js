import chai from 'chai';
import chaiHttp from 'chai-http';
import { app } from '../server.js';
import { describe, it, before, after } from 'mocha';

chai.use(chaiHttp);
const expect = chai.expect;

describe('Product Routes', () => {
    before((done) => {
        done();
    });

    it('should add a product on /add POST', (done) => {
        chai.request(app)
            .post('/api/add')
            .send({ autor: 'Novo Artigo', curtidas: [], descricao: "descricao", horario: new Date(), titulo: "titulo" })
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    it('should get all products on / GET', (done) => {
        chai.request(app)
            .get('/api/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                done();
            });
    });

 
    it('should delete a product on /:id DELETE', (done) => {
        const id = "JtB3ga7WEhFLlhNfHiZt";
        chai.request(app)
            .delete(`/api/${id}`)
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    it('should get all news on /noticias GET', (done) => {
        chai.request(app)
            .get('/api/noticias')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                done();
            });
    });

    after((done) => {
        done();
    });
});
