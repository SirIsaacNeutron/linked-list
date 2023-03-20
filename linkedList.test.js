import { LinkedList } from "./linkedList";

test("is initially size 0", () => {
    expect(new LinkedList().size()).toEqual(0)
})

test("appending elements", () => {
    const list = new LinkedList()

    list.append(1)

    expect(list.toString()).toEqual("( 1 ) -> null")
    expect(list.size()).toEqual(1)

    list.append(2)
    list.append(3)
    expect(list.toString()).toEqual("( 1 ) -> ( 2 ) -> ( 3 ) -> null")
    expect(list.size()).toEqual(3)
})

test("prepending elements", () => {
    const list = new LinkedList()

    list.prepend(1)

    expect(list.toString()).toEqual("( 1 ) -> null")
    expect(list.size()).toEqual(1)

    list.prepend(0)
    expect(list.toString()).toEqual("( 0 ) -> ( 1 ) -> null")
    expect(list.size()).toEqual(2)
})

test("returning tail nodes", () => {
    const list = new LinkedList()

    list.prepend(1)

    expect(list.tail().value).toEqual(1)

    list.append(2)
    expect(list.tail().value).toEqual(2)
})

test("using at() to access elements", () => {
    const list = new LinkedList()

    expect(list.at(0)).toEqual(-1)
    expect(list.at(1)).toEqual(-1)
    expect(list.at(-1)).toEqual(-1)

    list.prepend(1)

    expect(list.at(0).value).toEqual(1)

    list.append(2)
    list.append(3)

    expect(list.at(1).value).toEqual(2)
    expect(list.at(2).value).toEqual(3)

    expect(list.at(3)).toEqual(-1)
})

test("popping elements", () => {
    const list = new LinkedList()

    expect(list.pop()).toEqual(null)
    expect(list.toString()).toEqual("null")

    list.prepend(1)

    expect(list.pop().value).toEqual(1)
    expect(list.toString()).toEqual("null")

    list.append(1)
    list.append(2)

    expect(list.pop().value).toEqual(2)
    expect(list.toString()).toEqual("( 1 ) -> null")
})