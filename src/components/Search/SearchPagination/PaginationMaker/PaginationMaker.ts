export const PaginationMaker = (
  currenPage: number,
  totalCount: number,
  pageSize: number
) => {
  const numOfPage: number = Math.ceil(totalCount / pageSize)

  const listOfNum: number[] = Array.from({ length: numOfPage }, (_, i) => i + 1)
  const newList: number[] = []
  currenPage >= 1 && numOfPage <= 6 && newList.push(...listOfNum)
  currenPage === 1 &&
    numOfPage > 6 &&
    numOfPage !== 6 &&
    newList.push(1, 2, 3, 4, 0, numOfPage)
  currenPage === 2 && numOfPage > 6 && newList.push(1, 2, 3, 4, 0, numOfPage)
  currenPage === 3 && numOfPage > 6 && newList.push(1, 2, 3, 4, 0, numOfPage)

  currenPage >= 4 &&
    currenPage < numOfPage - 3 &&
    numOfPage > 6 &&
    newList.push(1, 0, currenPage - 1, currenPage, currenPage + 1, 0, numOfPage)

  currenPage >= 4 &&
    currenPage === numOfPage - 3 &&
    numOfPage > 6 &&
    newList.push(
      1,
      0,
      numOfPage - 4,
      numOfPage - 3,
      numOfPage - 2,
      0,
      numOfPage
    )
  currenPage >= 4 &&
    currenPage === numOfPage - 2 &&
    numOfPage > 6 &&
    newList.push(1, 0, numOfPage - 3, numOfPage - 2, numOfPage - 1, numOfPage)
  currenPage >= 4 &&
    currenPage === numOfPage - 1 &&
    numOfPage > 6 &&
    newList.push(1, 0, numOfPage - 3, numOfPage - 2, numOfPage - 1, numOfPage)
  currenPage >= 4 &&
    currenPage === numOfPage &&
    numOfPage > 6 &&
    newList.push(1, 0, numOfPage - 3, numOfPage - 2, numOfPage - 1, numOfPage)

  return newList
}
