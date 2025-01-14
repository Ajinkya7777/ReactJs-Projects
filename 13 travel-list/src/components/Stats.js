export default function Stats({ items }) {
  //early return if items length is zero
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding Some items to your packing list ✈</em>
      </footer>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything covered! Let's go for ADVENTURE...✈"
          : `👜 You have ${numItems} items on you list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
