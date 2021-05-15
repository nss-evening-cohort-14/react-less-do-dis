import { v4 as uuidv4 } from 'uuid';

const getTodos = () => [
  {
    name: 'todo 1',
    done: false,
    id: uuidv4()
  },
  {
    name: 'todo 2',
    done: false,
    id: uuidv4()
  },
];

export default getTodos;
