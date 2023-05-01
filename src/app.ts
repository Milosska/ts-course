// Task 1
function getPromise(): Promise<Array<string | number>> {
  return new Promise((resolve) => {
    resolve(["Text", 50]);
  });
}

getPromise().then((data) => {
  console.log(data);
});

// Task 2
type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(
  top: Pick<AllType, "name" | "color">,
  bottom: Pick<AllType, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

// Task 3
function merge<T extends {}, U extends {}>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// Task 4

interface IProps {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<IProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}
