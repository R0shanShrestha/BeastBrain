const useTyper = (index, nextword, func) => {
    console.log('Number of call: ', index)
  setTimeout(() => {
    return func(pre=>pre+=nextword+" ");
  }, 75 * index);
};

export default useTyper;
