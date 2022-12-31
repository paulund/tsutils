export const groupBy = (data, key) => {
  return data.reduce(function (carry, el) {
    const group = el[key];

    if (carry[group] === undefined) {
      carry[group] = []
    }

    carry[group].push(el)
    return carry
  }, {})
}
