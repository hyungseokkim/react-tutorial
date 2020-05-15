const API_KEY : string = "";
export const api = {
    wonDollar: (page = 1) =>
        fetch(
            `http://ecos.bok.or.kr/api/KeyStatisticList/${API_KEY}/json/kr/1/10/036Y003/DD/20200501/20200514/0000002/`
        )
        .then((res) => res.json())
        .then((res) => res)
};
 