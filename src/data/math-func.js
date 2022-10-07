// 1.     F(x) = sin(x)-x/3
//
// 2.     F(x) = sin(x)+x/3
//
// 3.     F(x) = cos(x)-x/3
//
// 4.     F(x) = cos(x)+x/3
//
// 5.     F(x) = 2*x*sin(x)-x/5
//
// 6.     F(x) = 3* sin(x)-x/3
//
// 7.     F(x) = 4* x*sin(x)+x/4
//
// 8.     F(x) = 2*sin(x)+x/5
//
// 9.     F(x) = 3* x*sin(x)+x/3
//
// 10. F(x) = 4*sin(x)+x/4
//
// 11. F(x) = 2* cos (x)-x/5
//
// 12. F(x) = 3* x*cos (x)-x/3
//
// 13. F(x) = 4* cos (x)+x/4
//
// 14. F(x) = 2* x*cos (x)+x/5
//
// 15. F(x) = 3* cos (x)+x/3
//
// 16. F(x) = 4* x*cos (x)+x/4
//
// 17. F(x) = 2* x*sin(x)+x*cos(x)
//
// 18. F(x) = 3*sin(x)-x*cos(x)/3
//
// 19. F(x) = 4* x*sin(x)+x*cos(x)
//
// 20. F(x) = 5*cos(x)-x*cos(x)/2
//
// 21. F(x) = 2* x*cos(x)+x* sin (x)
//
// 22. F(x) = 3*cos(x)-x* sin (x)/3
//
// 23. F(x) = 4* x*cos(x)+x* sin (x)
//
// 24. F(x) = 5*cos(x)-x* sin (x)/2
//
// 25. F(x) = cos(x)*x* sin (x)/3
//
// 26. F(x) = 5*cos(x)*x^2* sin (x)
//
// 27. F(x) = cos(x)*x^2/5-sin (x)

const mathFunc = [
  {
    text: 'sin(x)-x/3',
    func: (x) => Math.sin(x) - x / 3,
  },
  {
    text: 'sin(x)+x/3',
    func: (x) => Math.sin(x) + x / 3,
  },
  {
    text: 'cos(x)-x/3',
    func: (x) => Math.cos(x) - x / 3,
  },
  {
    text: 'cos(x)+x/3',
    func: (x) => Math.cos(x) + x / 3,
  },
  {
    text: '2*x*sin(x)-x/5',
    func: (x) => 2 * x * Math.sin(x) - x / 5,
  },
  {
    text: '3* sin(x)-x/3',
    func: (x) => 3 * Math.sin(x) - x / 3,
  },
  {
    text: '4* x*sin(x)+x/4',
    func: (x) => 4 * x * Math.sin(x) + x / 4,
  },
  {
    text: '2*sin(x)+x/5',
    func: (x) => 2 * Math.sin(x) + x / 5,
  },
  {
    text: '3* x*sin(x)+x/3',
    func: (x) => 3 * x * Math.sin(x) + x / 3,
  },
  {
    text: '4*sin(x)+x/4',
    func: (x) => 4 * Math.sin(x) + x / 4,
  },
  {
    text: '2* cos (x)-x/5',
    func: (x) => 2 * Math.cos(x) - x / 5,
  },
  {
    text: '3* x*cos (x)-x/3',
    func: (x) => 3 * x * Math.cos(x) - x / 3,
  },
  {
    text: '4* cos (x)+x/4',
    func: (x) => 4 * Math.cos(x) + x / 4,
  },
  {
    text: '2* x*cos (x)+x/5',
    func: (x) => 2 * x * Math.cos(x) + x / 5,
  },
  {
    text: '3* cos (x)+x/3',
    func: (x) => 3 * Math.cos(x) + x / 3,
  },
  {
    text: '4* x*cos (x)+x/4',
    func: (x) => 4 * x * Math.cos(x) + x / 4,
  },
  {
    text: '2* x*sin(x)+x*cos(x)',
    func: (x) => 2 * x * Math.sin(x) + x * Math.cos(x),
  },
  {
    text: '3*sin(x)-x*cos(x)/3',
    func: (x) => 3 * Math.sin(x) - x * Math.cos(x) / 3,
  },
  {
    text: '4* x*sin(x)+x*cos(x)',
    func: (x) => 4 * x * Math.sin(x) + x * Math.cos(x),
  },
  {
    text: '5*cos(x)-x*cos(x)/2',
    func: (x) => 5 * Math.cos(x) - x * Math.cos(x) / 2,
  },
  {
    text: '2* x*cos(x)+x* sin (x)',
    func: (x) => 2 * x * Math.cos(x) + x * Math.sin(x),
  },
  {
    text: '3*cos(x)-x* sin (x)/3',
    func: (x) => 3 * Math.cos(x) - x * Math.sin(x) / 3,
  },
  {
    text: '4* x*cos(x)+x* sin (x)',
    func: (x) => 4 * x * Math.cos(x) + x * Math.sin(x),
  },
  {
    text: '5*cos(x)-x* sin (x)/2',
    func: (x) => 5 * Math.cos(x) - x * Math.sin(x) / 2,
  },
  {
    text: 'cos(x)*x* sin (x)/3',
    func: (x) => Math.cos(x) * x * Math.sin(x) / 3,
  },
  {
    text: '5*cos(x)*x^2* sin (x)',
    func: (x) => 5 * Math.cos(x) * x ** 2 * Math.sin(x),
  },
  {
    text: 'cos(x)*x^2/5-sin (x)',
    func: (x) => Math.cos(x) * x ** 2 / 5 - Math.sin(x),
  },
];
export default mathFunc;
