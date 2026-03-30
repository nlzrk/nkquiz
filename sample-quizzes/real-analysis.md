# Real Analysis

Topics include sequences and series, limits, continuity, differentiability, the Riemann integral, and metric space topology. 10 questions drawn randomly from a bank of 100.

{bank:10}

---

{type:MC, Q:A sequence $\{a_n\}$ converges to $L$ if for every $\varepsilon > 0$ there exists $N$ such that $n > N$ implies:, A:a;$a_n = L$ b;$a_n < \varepsilon$ *c;$|a_n - L| < \varepsilon$ d;$|a_n| < L + \varepsilon$}

{type:MC, Q:The sequence $a_n = \frac{1}{n}$ converges to:, A:a;$1$ b;$\infty$ *c;$0$ d;$-1$}

{type:MC, Q:The sequence $a_n = (-1)^n$ is:, A:*a;Bounded but divergent b;Convergent to $0$ c;Unbounded d;Convergent to $1$}

{type:MC, Q:A sequence that is both bounded and monotone must:, A:a;Converge to $0$ b;Diverge c;Oscillate *d;Converge}

{type:MC, Q:If $\{a_n\}$ converges, then $\{a_n\}$ is:, A:a;Monotone *b;Bounded c;Positive d;Increasing}

{type:MC, Q:A Cauchy sequence $\{a_n\}$ in $\mathbb{R}$ satisfies: for every $\varepsilon > 0$ there exists $N$ such that for all $m, n > N$:, A:a;$a_n - a_m = 0$ b;$a_n + a_m < \varepsilon$ *c;$|a_n - a_m| < \varepsilon$ d;$|a_n| < \varepsilon$}

{type:MC, Q:In $\mathbb{R}$, every Cauchy sequence:, A:a;Is monotone *b;Converges c;Is bounded above only d;Diverges to infinity}

{type:MC, Q:The Bolzano-Weierstrass theorem states that every bounded sequence in $\mathbb{R}$:, A:a;Converges b;Is monotone *c;Has a convergent subsequence d;Is Cauchy}

{type:MC, Q:The limit superior $\limsup_{n\to\infty} a_n$ is:, A:a;The largest term in $\{a_n\}$ b;The limit of $\{a_n\}$ if it exists *c;The infimum of all limit points of $\{a_n\}$ d;The supremum of all limit points of $\{a_n\}$}

{type:MC, Q:A sequence $\{a_n\}$ converges if and only if:, A:a;$\limsup a_n = 0$ b;$\limsup a_n = \infty$ *c;$\limsup a_n = \liminf a_n$ d;$\limsup a_n > \liminf a_n$}

{type:SA, Q:Using the $\varepsilon$-$N$ definition, prove that $\lim_{n\to\infty} \frac{n}{n+1} = 1$., A:Given $\varepsilon > 0$, note $\left|\frac{n}{n+1} - 1\right| = \frac{1}{n+1} < \frac{1}{n}$. Choose $N > 1/\varepsilon$. Then $n > N$ implies $|a_n - 1| < 1/n < \varepsilon$., M:4}

{type:MC, Q:The series $\sum_{n=1}^\infty \frac{1}{n}$ is:, A:a;Convergent to $\ln 2$ b;Convergent to $e$ *c;Divergent d;Absolutely convergent}

{type:MC, Q:The geometric series $\sum_{n=0}^\infty r^n$ converges if and only if:, A:a;$r > 0$ b;$r < 1$ *c;$|r| < 1$ d;$|r| \leq 1$}

{type:MC, Q:The geometric series $\sum_{n=0}^\infty r^n$ with $|r| < 1$ converges to:, A:a;$\frac{r}{1-r}$ b;$\frac{1}{1+r}$ *c;$\frac{1}{1-r}$ d;$\frac{r}{1+r}$}

{type:MC, Q:The $p$-series $\sum_{n=1}^\infty \frac{1}{n^p}$ converges if and only if:, A:a;$p < 1$ b;$p \leq 1$ *c;$p > 1$ d;$p \geq 1$}

{type:MC, Q:The ratio test says $\sum a_n$ converges absolutely if $\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|$:, A:a;equals $1$ b;is greater than $1$ *c;is less than $1$ d;is greater than $2$}

{type:MC, Q:The root test says $\sum a_n$ converges absolutely if $\limsup_{n\to\infty} |a_n|^{1/n}$:, A:a;equals $1$ b;is greater than $1$ *c;is less than $1$ d;is greater than $0$}

{type:MC, Q:The integral test relates $\sum_{n=1}^\infty f(n)$ to $\int_1^\infty f(x)\,dx$ when $f$ is:, A:a;Any positive function *b;Positive, continuous, and decreasing c;A polynomial d;Bounded}

{type:MC, Q:The alternating series test (Leibniz): $\sum (-1)^n b_n$ converges if $\{b_n\}$ is:, A:a;Bounded *b;Decreasing and $b_n \to 0$ c;Positive and increasing d;Monotone and bounded}

{type:MC, Q:A series is absolutely convergent if:, A:a;It converges and all terms are positive b;It converges conditionally *c;$\sum |a_n|$ converges d;The partial sums are bounded}

{type:MC, Q:Absolute convergence implies:, A:a;Conditional convergence only *b;Convergence c;$\sum a_n = 0$ d;The series is bounded but not necessarily convergent}

{type:MC, Q:The series $\sum_{n=1}^\infty \frac{(-1)^n}{n}$ is:, A:a;Absolutely convergent b;Divergent *c;Conditionally convergent d;Neither convergent nor divergent}

{type:SA, Q:State the comparison test for series convergence., A:If $0 \leq a_n \leq b_n$ for all $n$ and $\sum b_n$ converges, then $\sum a_n$ converges. If $\sum a_n$ diverges, then $\sum b_n$ diverges., M:2}

{type:MC, Q:The limit comparison test for series $\sum a_n$ and $\sum b_n$ (with $a_n, b_n > 0$) says: if $\lim_{n\to\infty} \frac{a_n}{b_n} = L$ where $0 < L < \infty$, then:, A:a;$\sum a_n$ converges regardless of $\sum b_n$ *b;$\sum a_n$ and $\sum b_n$ either both converge or both diverge c;$\sum a_n$ diverges d;$L$ must equal $1$}

{type:MC, Q:A function $f: \mathbb{R} \to \mathbb{R}$ is continuous at $x_0$ if:, A:a;$f(x_0)$ exists b;$\lim_{x\to x_0} f(x)$ exists *c;$\lim_{x \to x_0} f(x) = f(x_0)$ d;$f$ is differentiable at $x_0$}

{type:MC, Q:The $\varepsilon$-$\delta$ definition of $\lim_{x\to a} f(x) = L$ requires: for every $\varepsilon > 0$ there exists $\delta > 0$ such that $0 < |x-a| < \delta$ implies:, A:*a;$|f(x) - L| < \varepsilon$ b;$|f(x)| < \varepsilon$ c;$|x - L| < \varepsilon$ d;$f(x) > L - \varepsilon$}

{type:MC, Q:If $f$ is continuous on $[a,b]$, the Intermediate Value Theorem guarantees:, A:a;$f$ attains its maximum on $[a,b]$ b;$f$ is differentiable on $(a,b)$ *c;For any $c$ between $f(a)$ and $f(b)$, there exists $x \in [a,b]$ with $f(x) = c$ d;$f$ has a unique zero on $[a,b]$}

{type:MC, Q:The Extreme Value Theorem states that if $f$ is continuous on $[a,b]$, then:, A:a;$f$ is differentiable on $[a,b]$ *b;$f$ attains its maximum and minimum values on $[a,b]$ c;$f$ is uniformly continuous d;$f$ has exactly one critical point}

{type:MC, Q:A function is uniformly continuous on a set $S$ if: for every $\varepsilon > 0$ there exists $\delta > 0$ such that for all $x, y \in S$:, A:a;$|f(x)| < \varepsilon$ b;$|x - y| < \delta$ *c;$|x-y| < \delta \Rightarrow |f(x)-f(y)| < \varepsilon$ d;$|f(x)-f(y)| < \delta$}

{type:MC, Q:Every continuous function on a closed bounded interval is:, A:a;Differentiable *b;Uniformly continuous c;Monotone d;A polynomial}

{type:SA, Q:State the definition of uniform continuity and explain how it differs from pointwise continuity., A:$f$ is uniformly continuous on $S$ if for every $\varepsilon>0$ there exists a single $\delta>0$ (independent of $x$) such that $|x-y|<\delta$ implies $|f(x)-f(y)|<\varepsilon$ for all $x,y\in S$. Unlike pointwise continuity, $\delta$ cannot depend on the point $x$., M:3}

{type:MC, Q:The derivative $f'(a)$ is defined as:, A:a;$\lim_{h\to 0} f(a+h)$ b;$\lim_{h\to 0} f(a+h) - f(a)$ *c;$\lim_{h\to 0} \frac{f(a+h)-f(a)}{h}$ d;$\lim_{x\to a} f(x)$}

{type:MC, Q:If $f$ is differentiable at $a$, then $f$ is:, A:a;Uniformly continuous b;Infinitely differentiable *c;Continuous at $a$ d;Monotone near $a$}

{type:MC, Q:Rolle's Theorem states: if $f$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $f(a) = f(b)$, then:, A:a;$f$ is constant *b;There exists $c \in (a,b)$ with $f'(c) = 0$ c;$f$ has a unique maximum on $(a,b)$ d;$f'(a) = f'(b)$}

{type:MC, Q:The Mean Value Theorem states: if $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then:, A:a;$f'(c) = 0$ for some $c \in (a,b)$ *b;$f'(c) = \frac{f(b)-f(a)}{b-a}$ for some $c \in (a,b)$ c;$f$ is constant on $(a,b)$ d;$f(c) = \frac{f(a)+f(b)}{2}$ for some $c$}

{type:MC, Q:If $f'(x) > 0$ for all $x \in (a,b)$, then $f$ is:, A:a;Constant *b;Strictly increasing c;Strictly decreasing d;Concave}

{type:MC, Q:Taylor's theorem with Lagrange remainder states that $f(x) = \sum_{k=0}^n \frac{f^{(k)}(a)}{k!}(x-a)^k + R_n(x)$ where $R_n(x) = $, A:a;$\frac{f^{(n)}(\xi)}{n!}(x-a)^n$ *b;$\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-a)^{n+1}$ for some $\xi$ between $a$ and $x$ c;$\frac{f^{(n)}(a)}{n!}(x-a)^n$ d;$0$ if $f$ is a polynomial of degree $\leq n$}

{type:SA, Q:State the Mean Value Theorem precisely., A:If $f:[a,b]\to\mathbb{R}$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then there exists $c\in(a,b)$ such that $f'(c) = \frac{f(b)-f(a)}{b-a}$., M:2}

{type:MC, Q:A function $f$ is said to be $L$-Lipschitz on a set $S$ if for all $x, y \in S$:, A:a;$|f(x) - f(y)| \geq L|x-y|$ *b;$|f(x) - f(y)| \leq L|x-y|$ c;$|f'(x)| = L$ d;$|f(x)| \leq L$}

{type:MC, Q:Every Lipschitz function is:, A:a;Differentiable b;Analytic *c;Uniformly continuous d;Constant}

{type:MC, Q:The Riemann integral $\int_a^b f(x)\,dx$ is defined using:, A:a;Antiderivatives b;Limits of derivatives *c;Limits of Riemann sums d;Taylor series}

{type:MC, Q:A bounded function $f$ on $[a,b]$ is Riemann integrable if and only if:, A:a;$f$ is continuous b;$f$ is monotone *c;The upper and lower Darboux integrals are equal d;$f$ has finitely many discontinuities}

{type:MC, Q:Every continuous function on $[a,b]$ is:, A:a;Differentiable *b;Riemann integrable c;Analytic d;Lipschitz}

{type:MC, Q:The Fundamental Theorem of Calculus Part 1 states: if $f$ is continuous on $[a,b]$ and $F(x) = \int_a^x f(t)\,dt$, then:, A:a;$F(x) = f(x)$ b;$F$ is continuous but not differentiable *c;$F'(x) = f(x)$ d;$F(b) - F(a) = f(b) - f(a)$}

{type:MC, Q:A set $E \subset \mathbb{R}$ is open if:, A:a;It contains all its limit points b;It is bounded *c;Every point of $E$ is an interior point d;Its complement is bounded}

{type:MC, Q:A set $E \subset \mathbb{R}$ is closed if:, A:a;It is the complement of an open set b;It is bounded *c;It contains all its limit points d;Every point is an interior point}

{type:MC, Q:The closure of a set $E$ is:, A:*a;The smallest closed set containing $E$ b;The interior of $E$ c;$E$ minus its boundary d;$E$ union its exterior}

{type:MC, Q:The interior of a set $E$ is:, A:a;The set of all limit points of $E$ b;$E$ minus its boundary *c;The largest open set contained in $E$ d;The closure of $E$}

{type:MC, Q:The Heine-Borel theorem states that a subset of $\mathbb{R}^n$ is compact if and only if it is:, A:a;Open and bounded b;Closed c;Bounded *d;Closed and bounded}

{type:MC, Q:A set $K$ is compact if and only if every open cover of $K$:, A:a;Has exactly one finite subcover b;Is finite *c;Has a finite subcover d;Covers all of $\mathbb{R}$}

{type:MC, Q:A continuous function on a compact set is:, A:a;Differentiable b;Analytic *c;Uniformly continuous d;Bounded but not necessarily uniformly continuous}

{type:SA, Q:State the Heine-Borel theorem for subsets of $\mathbb{R}$., A:A subset $K \subseteq \mathbb{R}$ is compact if and only if it is closed and bounded., M:2}

{type:MC, Q:A metric space $(X, d)$ requires $d$ to satisfy (among other axioms):, A:a;$d(x,y) = d(y,x)$ and $d(x,y) \geq 0$ b;$d(x,y) = 0 \Leftrightarrow x = y$ and the triangle inequality only *c;$d(x,y) \geq 0$; $d(x,y)=0\Leftrightarrow x=y$; $d(x,y)=d(y,x)$; $d(x,z)\leq d(x,y)+d(y,z)$ d;$d(x,y) \leq 1$ for all $x, y$}

{type:MC, Q:In a metric space, a sequence $\{x_n\}$ is Cauchy if:, A:a;It converges b;$d(x_n, x_0) \to 0$ for some fixed $x_0$ *c;For every $\varepsilon > 0$ there exists $N$ such that $m, n > N$ implies $d(x_m, x_n) < \varepsilon$ d;$d(x_n, x_{n+1}) \to 0$}

{type:MC, Q:A metric space is complete if:, A:a;Every bounded sequence converges b;Every open set is closed *c;Every Cauchy sequence converges d;Every sequence has a convergent subsequence}

{type:MC, Q:$\mathbb{R}$ with the standard metric is:, A:a;Compact b;Not complete *c;Complete d;Bounded}

{type:MC, Q:A function $f: (X, d_X) \to (Y, d_Y)$ between metric spaces is continuous at $x_0$ if:, A:*a;For every $\varepsilon > 0$ there exists $\delta > 0$ such that $d_X(x, x_0) < \delta \Rightarrow d_Y(f(x), f(x_0)) < \varepsilon$ b;$f(x_0)$ exists c;$\lim_{n\to\infty} f(x_n) = f(x_0)$ for every sequence with $x_n \to x_0$ d;Both a and c are correct}

{type:MC, Q:A sequence of functions $f_n \to f$ uniformly on $[a,b]$ if:, A:a;For each $x$, $f_n(x) \to f(x)$ b;$\int_a^b |f_n - f| \to 0$ *c;$\sup_{x \in [a,b]} |f_n(x) - f(x)| \to 0$ d;$f_n(x_0) \to f(x_0)$ for some $x_0$}

{type:MC, Q:If $f_n \to f$ uniformly on $[a,b]$ and each $f_n$ is continuous, then $f$ is:, A:a;Differentiable b;A polynomial *c;Continuous d;Monotone}

{type:MC, Q:The Weierstrass M-test states that $\sum f_n$ converges uniformly if:, A:a;Each $f_n$ is continuous *b;There exist constants $M_n$ with $|f_n(x)| \leq M_n$ for all $x$ and $\sum M_n < \infty$ c;The partial sums are bounded d;$f_n \to 0$ pointwise}

{type:MC, Q:Pointwise convergence of $f_n \to f$ means:, A:*a;For each fixed $x$, $f_n(x) \to f(x)$ b;$\sup_x |f_n(x) - f(x)| \to 0$ c;$f_n$ is eventually constant at each $x$ d;The convergence is uniform}

{type:MC, Q:Uniform convergence implies:, A:a;Absolute convergence b;Differentiability of the limit *c;Pointwise convergence d;Compactness of the domain}

{type:SA, Q:Give an example of a sequence of continuous functions that converges pointwise but not uniformly on $[0,1]$., A:$f_n(x) = x^n$ converges pointwise to $f(x) = 0$ for $x \in [0,1)$ and $f(1) = 1$, but not uniformly since the limit function is discontinuous., M:3}

{type:MC, Q:A power series $\sum_{n=0}^\infty a_n (x - a)^n$ has a radius of convergence $R$ given by:, A:a;$R = \lim_{n\to\infty} a_n$ *b;$R = \frac{1}{\limsup_{n\to\infty} |a_n|^{1/n}}$ c;$R = \limsup_{n\to\infty} |a_n|$ d;$R = 1$}

{type:MC, Q:Within its radius of convergence, a power series:, A:a;Converges only at the center b;May not be continuous *c;Converges uniformly and absolutely on every compact subset d;Has a finite sum}

{type:MC, Q:A function is analytic on an interval if it:, A:a;Is infinitely differentiable *b;Equals its Taylor series in a neighborhood of every point c;Is bounded d;Has no zeros}

{type:MC, Q:The set $\mathbb{Q}$ of rationals is:, A:a;Open *b;Neither open nor closed in $\mathbb{R}$ c;Closed d;Compact}

{type:MC, Q:A set $E$ is dense in $\mathbb{R}$ if:, A:a;$E = \mathbb{R}$ *b;Every open interval contains a point of $E$ c;$E$ is closed d;$E$ is uncountable}

{type:MC, Q:The Cantor set is:, A:a;Open and countable b;Dense in $[0,1]$ *c;Closed, uncountable, and has measure zero d;Open and dense}

{type:SA, Q:State the Nested Interval Property for $\mathbb{R}$., A:If $[a_1,b_1] \supseteq [a_2,b_2] \supseteq \cdots$ is a sequence of closed bounded intervals with $b_n - a_n \to 0$, then $\bigcap_{n=1}^\infty [a_n, b_n]$ contains exactly one point., M:2}

{type:MC, Q:Which of the following is an example of a complete metric space?, A:a;$\mathbb{Q}$ with the standard metric b;$(0,1)$ with the standard metric *c;$\mathbb{R}$ with the standard metric d;$\mathbb{Q}^n$ with the Euclidean metric}

{type:MC, Q:A contraction mapping $T: X \to X$ on a complete metric space satisfies:, A:a;$d(Tx, Ty) = d(x, y)$ *b;$d(Tx, Ty) \leq c \cdot d(x,y)$ for some $c \in (0,1)$ c;$d(Tx, Ty) \geq d(x,y)$ d;$T$ is continuous but not necessarily Lipschitz}

{type:MC, Q:Banach's Fixed Point Theorem guarantees that a contraction on a complete metric space has:, A:a;At least one fixed point *b;Exactly one fixed point c;No fixed points d;Infinitely many fixed points}

{type:MC, Q:The $\sigma$-algebra generated by all open sets of $\mathbb{R}$ is called:, A:a;The Lebesgue measure b;The power set *c;The Borel $\sigma$-algebra d;The standard topology}

{type:SA, Q:Explain why $f(x) = x^2$ is uniformly continuous on $[0,1]$ but not on $\mathbb{R}$., A:On $[0,1]$, $f$ is continuous on a compact set, hence uniformly continuous by theorem. On $\mathbb{R}$, for any $\delta>0$ we can find $x, y$ with $|x-y|<\delta$ but $|x^2 - y^2| = |x+y||x-y|$ arbitrarily large by taking $x, y$ large., M:3}
