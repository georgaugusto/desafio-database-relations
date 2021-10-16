import * as ProductsRepository from "@modules/products/infra/typeorm/repositories/ProductsRepository"
// @ponicode
describe("create", () => {
    let inst: any

    beforeEach(() => {
        inst = new ProductsRepository.default()
    })

    test("0", async () => {
        await inst.create({ name: "Michael", price: 56784, quantity: -1 })
    })

    test("1", async () => {
        await inst.create({ name: "George", price: 12, quantity: 0 })
    })

    test("2", async () => {
        await inst.create({ name: "Pierre Edouard", price: 987650, quantity: 1 })
    })

    test("3", async () => {
        await inst.create({ name: "Michael", price: 987650, quantity: -100 })
    })

    test("4", async () => {
        await inst.create({ name: "Edmond", price: "bc23a9d531064583ace8f67dad60f6bb", quantity: 100 })
    })

    test("5", async () => {
        await inst.create({ name: "", price: NaN, quantity: NaN })
    })
})

// @ponicode
describe("findByName", () => {
    let inst: any

    beforeEach(() => {
        inst = new ProductsRepository.default()
    })

    test("0", async () => {
        await inst.findByName("Anas")
    })

    test("1", async () => {
        await inst.findByName("Michael")
    })

    test("2", async () => {
        await inst.findByName("Pierre Edouard")
    })

    test("3", async () => {
        await inst.findByName("George")
    })

    test("4", async () => {
        await inst.findByName("Edmond")
    })

    test("5", async () => {
        await inst.findByName("")
    })
})

// @ponicode
describe("findAllById", () => {
    let inst: any

    beforeEach(() => {
        inst = new ProductsRepository.default()
    })

    test("0", async () => {
        let param1: any = [{ id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }, { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }]
        await inst.findAllById(param1)
    })

    test("1", async () => {
        let param1: any = [{ id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" }, { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }, { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" }, { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" }, { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" }]
        await inst.findAllById(param1)
    })

    test("2", async () => {
        let param1: any = [{ id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }, { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }]
        await inst.findAllById(param1)
    })

    test("3", async () => {
        let param1: any = [{ id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }, { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }]
        await inst.findAllById(param1)
    })

    test("4", async () => {
        let param1: any = [{ id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }, { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" }]
        await inst.findAllById(param1)
    })

    test("5", async () => {
        await inst.findAllById([])
    })
})

// @ponicode
describe("updateQuantity", () => {
    let inst: any

    beforeEach(() => {
        inst = new ProductsRepository.default()
    })

    test("0", async () => {
        let param1: any = [{ id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", quantity: 0 }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", quantity: 0 }]
        await inst.updateQuantity(param1)
    })

    test("1", async () => {
        let param1: any = [{ id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", quantity: -100 }, { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", quantity: 0 }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", quantity: -1 }]
        await inst.updateQuantity(param1)
    })

    test("2", async () => {
        let param1: any = [{ id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", quantity: 100 }]
        await inst.updateQuantity(param1)
    })

    test("3", async () => {
        let param1: any = [{ id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", quantity: 100 }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", quantity: 0 }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", quantity: 1 }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", quantity: 0 }]
        await inst.updateQuantity(param1)
    })

    test("4", async () => {
        let param1: any = [{ id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", quantity: 100 }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", quantity: 0 }, { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", quantity: -100 }, { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", quantity: -1 }, { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", quantity: 0 }]
        await inst.updateQuantity(param1)
    })

    test("5", async () => {
        await inst.updateQuantity([])
    })
})
