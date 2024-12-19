// 1. Преобразовать данные из https://jsonplaceholder.typicode.com/users
// к виду чтобы укаждого пользователя отобразить только id и username
// 2. Получить из данных выше список всех эмейлов
// 3. Вывести пользователя с id === 9
// 4. Вывести всех пользователей из города 'Lebsackbury'
// 5. Вывести первых 5 пользователей
// 6. Вывести всех пользователей в обратном порядке
// 7. Посчитать сколько всего пользователей
// 8. Вывести список вебсайтов пользователей которые содержат '.com'
// 9. Вывести все username которые длиннее 12 символов
// 10. Привести список всех username где каждый будет в нижнем регистре

const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((response) => response.json())
  .then((users) => {
    const answer1 = users.map((el) => ({ id: el.id, username: el.username }));
    const answer2 = users.reduce((acc, curr) => [...acc, curr.email], []);
    const answer3 = users.find((el) => el.id === 9);
    const answer4 = users.filter((el) => el.address.city === "Lebsackbury");
    const answer5 = users.slice(0, 5);
    const answer6 = users.reverse();
    const answer7 = users.length;
    const answer8 = users.reduce(
      (acc, curr) => (curr.website.includes(".com") ? [...acc, curr] : acc),
      []
    );
    const answer9 = users.reduce(
      (acc, curr) => (curr.username.length > 12 ? [...acc, curr] : acc),
      []
    );
    const answer10 = users.reduce(
      (acc, curr) => [...acc, curr.username.toLocaleLowerCase()],
      []
    );

    // Answers ========
    console.log("Answer 1:", answer1);
    console.log("Answer 2:", answer2);
    console.log("Answer 3:", answer3);
    console.log("Answer 4:", answer4);
    console.log("Answer 5:", answer5);
    console.log("Answer 6:", answer6);
    console.log("Answer 7:", answer7);
    console.log("Answer 8:", answer8);
    console.log("Answer 9:", answer9);
    console.log("Answer 10:", answer10);
  })

  .catch((error) => {
    console.error("Error fetching users:", error);
  });
