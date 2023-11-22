const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server.cjs");
const should = chai.should();

chai.use(chaiHttp);

describe("eric", () => {
    describe("/GET eric", () => {
        it("it should GET eric", (done) => {
        chai
            .request(app)
            .get("/eric")
            .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            done();
            });
        });
    });
    }
);