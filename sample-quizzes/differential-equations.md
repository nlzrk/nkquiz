# Differential Equations

Topics include first-order ODEs (separable, linear, exact), second-order linear ODEs, undetermined coefficients, variation of parameters, Laplace transforms, and systems of ODEs. 10 questions drawn randomly from a bank of 100.

{bank:10}

---

{type:MC, Q:A differential equation is called ordinary (ODE) rather than partial (PDE) when:, A:a;It has a unique solution b;The unknown function depends on multiple variables *c;The unknown function depends on only one variable d;All coefficients are constant}

{type:MC, Q:The order of a differential equation is:, A:*a;The order of the highest derivative appearing in the equation b;The degree of the polynomial c;The number of terms d;The number of initial conditions required}

{type:MC, Q:A first-order ODE is separable if it can be written as:, A:a;$y' + P(x)y = Q(x)$ *b;$g(y)\,dy = h(x)\,dx$ c;$M\,dx + N\,dy = 0$ with $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$ d;$y' = f(x)$}

{type:MC, Q:Solve the separable ODE $\frac{dy}{dx} = 2xy$., A:a;$y = e^{x^2}$ *b;$y = Ce^{x^2}$ c;$y = 2xe^{x^2}$ d;$y = C e^{2x}$}

{type:MC, Q:Solve $\frac{dy}{dx} = \frac{x}{y}$ with $y(0) = 2$., A:a;$y = x + 2$ b;$y^2 = x^2$ *c;$y = \sqrt{x^2 + 4}$ d;$y = \sqrt{x^2 + 2}$}

{type:MC, Q:The general solution of $\frac{dy}{dx} = ky$ is:, A:a;$y = k\sin(x) + C$ b;$y = kx + C$ *c;$y = Ce^{kx}$ d;$y = C e^{k} + x$}

{type:MC, Q:A first-order linear ODE has the standard form:, A:a;$y' = f(xy)$ *b;$y' + P(x)y = Q(x)$ c;$y'' + P(x)y = 0$ d;$M\,dx + N\,dy = 0$}

{type:MC, Q:The integrating factor for $y' + P(x)y = Q(x)$ is:, A:a;$e^{Q(x)}$ b;$e^{-\int P(x)\,dx}$ *c;$e^{\int P(x)\,dx}$ d;$\int P(x)\,dx$}

{type:MC, Q:Solve $y' + 2y = 0$., A:a;$y = 2e^x + C$ b;$y = Ce^{2x}$ *c;$y = Ce^{-2x}$ d;$y = 2x + C$}

{type:MC, Q:Solve $y' + \frac{y}{x} = x$ using an integrating factor., A:a;$y = \frac{x^2}{3} + C$ *b;$y = \frac{x^2}{3} + \frac{C}{x}$ c;$y = \frac{x^3}{3} + C$ d;$y = x^2 + Cx$}

{type:MC, Q:An exact ODE $M\,dx + N\,dy = 0$ satisfies:, A:a;$\frac{\partial M}{\partial x} = \frac{\partial N}{\partial y}$ *b;$\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$ c;$M = N$ d;$MN = 0$}

{type:MC, Q:Test whether $(2xy)\,dx + (x^2 + 1)\,dy = 0$ is exact. It is exact because:, A:a;$M = N$ *b;$\frac{\partial M}{\partial y} = 2x = \frac{\partial N}{\partial x}$ c;$\frac{\partial M}{\partial x} = \frac{\partial N}{\partial y}$ d;Both $M$ and $N$ are polynomials}

{type:SA, Q:Solve the exact ODE $(2xy)\,dx + (x^2 + 1)\,dy = 0$., A:$F(x,y) = x^2 y + y = C$, M:3}

{type:MC, Q:A Bernoulli equation has the form:, A:a;$y' + P(x)y = Q(x)$ *b;$y' + P(x)y = Q(x)y^n$ c;$y'' + P(x)y' + Q(x)y = 0$ d;$y' = f(y/x)$}

{type:MC, Q:The substitution $v = y^{1-n}$ transforms a Bernoulli equation into a:, A:a;Separable ODE b;Bernoulli ODE of lower order *c;First-order linear ODE d;Homogeneous ODE}

{type:MC, Q:The logistic equation $\frac{dP}{dt} = rP\left(1 - \frac{P}{K}\right)$ has equilibrium solutions:, A:a;$P = r$ and $P = K$ b;$P = 0$ only *c;$P = 0$ and $P = K$ d;$P = K/r$}

{type:MC, Q:The general solution of $y'' - 4y = 0$ is:, A:a;$y = C_1\cos(2x) + C_2\sin(2x)$ b;$y = C_1 e^{2x}$ *c;$y = C_1 e^{2x} + C_2 e^{-2x}$ d;$y = (C_1 + C_2 x)e^{2x}$}

{type:MC, Q:The characteristic equation of $y'' + 5y' + 6y = 0$ is:, A:a;$r^2 - 5r - 6 = 0$ *b;$r^2 + 5r + 6 = 0$ c;$r^2 + 5r - 6 = 0$ d;$r^2 - 5r + 6 = 0$}

{type:MC, Q:Solve $y'' + 5y' + 6y = 0$., A:a;$y = C_1 e^{2x} + C_2 e^{3x}$ *b;$y = C_1 e^{-2x} + C_2 e^{-3x}$ c;$y = C_1 e^{-x} + C_2 e^{-6x}$ d;$y = e^{-5x}(C_1 + C_2 x)$}

{type:MC, Q:The characteristic equation $r^2 + 2r + 5 = 0$ has roots:, A:a;$r = 2 \pm i$ *b;$r = -1 \pm 2i$ c;$r = 1 \pm 2i$ d;$r = -2 \pm i$}

{type:MC, Q:If the characteristic equation has complex roots $\alpha \pm \beta i$, the general solution is:, A:a;$y = C_1 e^{\alpha x} + C_2 e^{-\alpha x}$ b;$y = e^{\beta x}(C_1\cos(\alpha x) + C_2\sin(\alpha x))$ *c;$y = e^{\alpha x}(C_1\cos(\beta x) + C_2\sin(\beta x))$ d;$y = C_1\cos(\beta x) + C_2\sin(\beta x)$}

{type:MC, Q:Solve $y'' + 4y = 0$., A:*a;$y = C_1\cos(2x) + C_2\sin(2x)$ b;$y = C_1 e^{2x} + C_2 e^{-2x}$ c;$y = C_1\cos(4x) + C_2\sin(4x)$ d;$y = e^{2x}(C_1 + C_2 x)$}

{type:MC, Q:If the characteristic equation has a repeated real root $r$, the general solution is:, A:a;$y = C_1 e^{rx}$ b;$y = C_1 e^{rx} + C_2 e^{-rx}$ *c;$y = (C_1 + C_2 x)e^{rx}$ d;$y = C_1 e^{rx} + C_2 x e^{2rx}$}

{type:MC, Q:Solve $y'' - 6y' + 9y = 0$., A:a;$y = C_1 e^{3x} + C_2 e^{-3x}$ b;$y = e^{3x}(C_1\cos(3x) + C_2\sin(3x))$ *c;$y = (C_1 + C_2 x)e^{3x}$ d;$y = C_1 e^{3x}$}

{type:SA, Q:Find the general solution of $y'' + 2y' + 5y = 0$., A:$y = e^{-x}(C_1\cos(2x) + C_2\sin(2x))$, M:3}

{type:MC, Q:The method of undetermined coefficients is used to find:, A:a;The complementary solution of a homogeneous ODE *b;A particular solution to $ay'' + by' + cy = g(x)$ when $g$ is of a special form c;The general solution of any ODE d;Eigenvalues of the coefficient matrix}

{type:MC, Q:For the ODE $y'' + y = 3x$, a particular solution has the trial form:, A:a;$y_p = Ae^x$ b;$y_p = A\cos(x) + B\sin(x)$ *c;$y_p = Ax + B$ d;$y_p = Ax^2 + Bx + C$}

{type:MC, Q:For the ODE $y'' + y = \cos(x)$, why must the trial particular solution be modified?, A:*a;$\cos(x)$ is a solution to the homogeneous equation b;The right-hand side is not polynomial c;The equation has complex roots d;The coefficient of $y''$ is $1$}

{type:MC, Q:When $g(x) = e^{ax}$ and $a$ is not a root of the characteristic equation, the trial solution is:, A:a;$y_p = Axe^{ax}$ *b;$y_p = Ae^{ax}$ c;$y_p = Ax^2 e^{ax}$ d;$y_p = A\cos(ax) + B\sin(ax)$}

{type:MC, Q:Find a particular solution to $y'' - y = e^{2x}$., A:a;$y_p = e^{2x}$ *b;$y_p = \frac{1}{3}e^{2x}$ c;$y_p = -\frac{1}{3}e^{2x}$ d;$y_p = xe^{2x}$}

{type:MC, Q:For $y'' + 4y = \sin(2x)$, the correct trial particular solution is:, A:a;$y_p = A\sin(2x)$ b;$y_p = A\cos(2x) + B\sin(2x)$ *c;$y_p = Ax\cos(2x) + Bx\sin(2x)$ d;$y_p = Ax^2\sin(2x)$}

{type:SA, Q:Find a particular solution to $y'' - 3y' + 2y = 4x$., A:$y_p = 2x + 3$, M:3}

{type:MC, Q:Variation of parameters finds a particular solution using the formula:, A:a;$y_p = u_1y_1 + u_2y_2$ where $u_1, u_2$ are constants *b;$y_p = u_1(x)y_1 + u_2(x)y_2$ where $y_1, y_2$ are the homogeneous solutions c;$y_p = W(y_1,y_2)$ d;$y_p$ is found by substituting a trial function}

{type:MC, Q:The Wronskian $W(y_1, y_2)$ of two functions is:, A:a;$y_1 y_2' + y_2 y_1'$ *b;$y_1 y_2' - y_2 y_1'$ c;$y_1' y_2' - y_1 y_2$ d;$(y_1 + y_2)'$}

{type:MC, Q:Abel's theorem states that the Wronskian $W(y_1,y_2)$ of solutions to $y'' + P(x)y' + Q(x)y = 0$ satisfies:, A:a;$W' = P(x)W$ *b;$W' = -P(x)W$ c;$W = \text{const}$ d;$W = e^{Q(x)}$}

{type:MC, Q:The Laplace transform $\mathcal{L}\{f(t)\}$ is defined as:, A:a;$\int_0^\infty e^{st} f(t)\,dt$ *b;$\int_0^\infty e^{-st} f(t)\,dt$ c;$\int_{-\infty}^\infty e^{-st} f(t)\,dt$ d;$\int_0^\infty f(t)\cos(st)\,dt$}

{type:MC, Q:$\mathcal{L}\{1\} = $, A:a;$1$ *b;$\frac{1}{s}$ c;$s$ d;$\frac{1}{s^2}$}

{type:MC, Q:$\mathcal{L}\{e^{at}\} = $, A:a;$\frac{a}{s}$ b;$\frac{1}{s+a}$ *c;$\frac{1}{s-a}$ d;$e^{as}$}

{type:MC, Q:$\mathcal{L}\{t^n\} = $, A:a;$\frac{n}{s^{n+1}}$ b;$\frac{1}{s^n}$ *c;$\frac{n!}{s^{n+1}}$ d;$\frac{(n-1)!}{s^n}$}

{type:MC, Q:$\mathcal{L}\{\sin(at)\} = $, A:*a;$\frac{a}{s^2+a^2}$ b;$\frac{s}{s^2+a^2}$ c;$\frac{a}{s^2-a^2}$ d;$\frac{s}{s^2-a^2}$}

{type:MC, Q:$\mathcal{L}\{\cos(at)\} = $, A:a;$\frac{a}{s^2+a^2}$ *b;$\frac{s}{s^2+a^2}$ c;$\frac{a}{s^2-a^2}$ d;$\frac{1}{s^2+a^2}$}

{type:MC, Q:The Laplace transform of the derivative satisfies $\mathcal{L}\{y'\} = $, A:a;$sY(s)$ b;$s^2Y(s) - sy(0) - y'(0)$ *c;$sY(s) - y(0)$ d;$Y(s)/s$}

{type:MC, Q:$\mathcal{L}\{y''\} = $, A:a;$s^2Y(s)$ *b;$s^2Y(s) - sy(0) - y'(0)$ c;$sY(s) - y(0) - y'(0)$ d;$s^2Y(s) - y(0)$}

{type:MC, Q:The Laplace transform of a convolution $f * g$ is:, A:a;$F(s) + G(s)$ b;$F(s)/G(s)$ *c;$F(s) \cdot G(s)$ d;$F(s) - G(s)$}

{type:MC, Q:The Heaviside step function $u_c(t)$ is used in Laplace transforms to represent:, A:a;Sinusoidal inputs *b;Functions that are switched on at $t = c$ c;Impulsive forces d;Exponentially growing inputs}

{type:MC, Q:$\mathcal{L}\{\delta(t - c)\} = $ where $\delta$ is the Dirac delta function., A:a;$e^{cs}$ *b;$e^{-cs}$ c;$1/s$ d;$c/s$}

{type:SA, Q:Use the Laplace transform to solve $y' + 2y = 0$ with $y(0) = 3$., A:$y(t) = 3e^{-2t}$, M:3}

{type:SA, Q:Use the Laplace transform to solve $y'' + 4y = 0$ with $y(0) = 1, y'(0) = 0$., A:$y(t) = \cos(2t)$, M:4}

{type:MC, Q:The first shifting theorem states $\mathcal{L}\{e^{at}f(t)\} = $, A:a;$F(s+a)$ *b;$F(s-a)$ c;$e^{-as}F(s)$ d;$e^{as}F(s)$}

{type:MC, Q:The second shifting theorem (for $u_c(t)f(t-c)$) gives $\mathcal{L}\{u_c(t)f(t-c)\} = $, A:a;$e^{cs}F(s)$ *b;$e^{-cs}F(s)$ c;$F(s-c)$ d;$F(s+c)$}

{type:MC, Q:A system of two first-order ODEs $\mathbf{x}' = A\mathbf{x}$ has solutions of the form:, A:a;$\mathbf{x} = e^{At}\mathbf{x}_0$ but only if $A$ is symmetric *b;$\mathbf{x} = e^{At}\mathbf{x}_0$ c;$\mathbf{x} = A^{-1}\mathbf{x}_0$ d;$\mathbf{x} = \cos(At)\mathbf{x}_0$}

{type:MC, Q:For the system $\mathbf{x}' = A\mathbf{x}$, if $\lambda$ is an eigenvalue of $A$ with eigenvector $\mathbf{v}$, then one solution is:, A:a;$\mathbf{x} = \lambda e^{\lambda t}\mathbf{v}$ *b;$\mathbf{x} = e^{\lambda t}\mathbf{v}$ c;$\mathbf{x} = e^{At}\mathbf{v}$ d;$\mathbf{x} = \lambda \mathbf{v}$}

{type:MC, Q:The phase portrait of $\mathbf{x}' = A\mathbf{x}$ near an equilibrium is a stable node when:, A:a;Eigenvalues are purely imaginary b;Eigenvalues have positive real parts *c;Both eigenvalues are negative real numbers d;Eigenvalues are complex with positive real parts}

{type:MC, Q:The equilibrium of $\mathbf{x}' = A\mathbf{x}$ is a center when eigenvalues are:, A:a;Both negative b;Both positive *c;Purely imaginary d;Complex with negative real parts}

{type:SA, Q:Find the general solution of the system $x' = 3x - 2y$, $y' = 2x - 2y$ (write in terms of eigenvalues and eigenvectors)., A:Eigenvalues of $A=\begin{pmatrix}3&-2\\2&-2\end{pmatrix}$ are $\lambda=2$ and $\lambda=-1$. General solution: $\mathbf{x} = C_1 e^{2t}\begin{pmatrix}2\\1\end{pmatrix} + C_2 e^{-t}\begin{pmatrix}1\\2\end{pmatrix}$., M:5}

{type:MC, Q:Euler's method for solving $y' = f(x,y)$ approximates:, A:a;The exact solution b;The Laplace transform *c;$y_{n+1} \approx y_n + h f(x_n, y_n)$ d;$y_{n+1} = y_n + f(x_{n+1}, y_{n+1})$}

{type:MC, Q:The Runge-Kutta method (RK4) is preferred over Euler's method because:, A:a;It requires fewer evaluations b;It is always exact *c;It has higher order accuracy ($O(h^4)$ vs $O(h)$) d;It uses less memory}

{type:MC, Q:The ODE $y'' + P(x)y' + Q(x)y = 0$ is called a Cauchy-Euler equation if:, A:a;$P$ and $Q$ are polynomials b;$P$ and $Q$ are constants *c;$P(x) = a/x$ and $Q(x) = b/x^2$ for constants $a, b$ d;The equation is exact}

{type:MC, Q:For the Cauchy-Euler equation $x^2y'' + 3xy' + y = 0$, the substitution $x = e^t$ converts it to:, A:*a;A constant-coefficient ODE in $t$ b;A separable ODE c;A Bernoulli equation d;A first-order linear ODE}

{type:MC, Q:The power series method assumes a solution of the form:, A:a;$y = e^{rx}$ *b;$y = \sum_{n=0}^\infty a_n x^n$ c;$y = \ln(x)$ d;$y = \sin(rx) + \cos(rx)$}

{type:MC, Q:An ordinary point $x_0$ of $P(x)y'' + Q(x)y' + R(x)y = 0$ is a point where:, A:a;$P(x_0) = 0$ *b;$P(x_0) \neq 0$ c;$Q(x_0) = 0$ and $R(x_0) = 0$ d;The solution is singular}

{type:MC, Q:The method of Frobenius applies when $x_0$ is:, A:*a;A regular singular point b;An ordinary point c;An irregular singular point d;Any point where $P(x_0) = 0$}

{type:MC, Q:The indicial equation in the Frobenius method is used to find:, A:a;The recurrence relation for coefficients b;The radius of convergence *c;The exponents $r$ in $y = x^r \sum_{n=0}^\infty a_n x^n$ d;The singular points}

{type:SA, Q:State the existence and uniqueness theorem for the IVP $y' = f(x,y)$, $y(x_0) = y_0$., A:If $f$ and $\partial f/\partial y$ are continuous in a rectangle containing $(x_0, y_0)$, then there exists a unique solution on some interval containing $x_0$., M:3}

{type:MC, Q:The Wronskian of $y_1 = e^{2x}$ and $y_2 = e^{-2x}$ is:, A:a;$0$ b;$4e^{2x}$ *c;$-4$ d;$4$}

{type:MC, Q:For a nonhomogeneous ODE $Ly = g$, the general solution is:, A:a;$y = y_p$ b;$y = y_h$ *c;$y = y_h + y_p$ d;$y = y_h \cdot y_p$}

{type:MC, Q:The principle of superposition holds for:, A:a;All differential equations *b;Linear homogeneous differential equations c;Nonlinear differential equations d;Equations with non-constant coefficients only}

{type:MC, Q:A second-order linear ODE has how many linearly independent solutions (for the homogeneous case)?:, A:a;$1$ *b;$2$ c;$3$ d;Infinitely many}

{type:SA, Q:Solve the IVP $y' = y^2$, $y(0) = 1$ and identify the interval of existence., A:$y = \frac{1}{1-t}$, which exists on $(-\infty, 1)$., M:3}

{type:MC, Q:The population model $\frac{dN}{dt} = rN$ (with $r > 0$) predicts:, A:a;Logistic growth *b;Exponential growth c;Oscillatory behavior d;Exponential decay}

{type:MC, Q:In Newton's law of cooling, $\frac{dT}{dt} = k(T - T_s)$, the temperature $T(t)$ approaches:, A:a;Infinity as $t \to \infty$ if $k > 0$ *b;$T_s$ as $t \to \infty$ c;$0$ as $t \to \infty$ d;$T(0)$ as $t \to \infty$}

{type:MC, Q:The equation $m\ddot{x} + c\dot{x} + kx = F\cos(\omega t)$ models:, A:a;An RC circuit b;Population dynamics *c;A forced damped harmonic oscillator d;Heat diffusion}

{type:MC, Q:Resonance in a forced oscillator $x'' + \omega_0^2 x = F\cos(\omega t)$ occurs when:, A:a;$\omega = 2\omega_0$ *b;$\omega = \omega_0$ c;$F > \omega_0$ d;$\omega < \omega_0$}

{type:MC, Q:The general solution to $y'' + y = \sec(x)$ by variation of parameters is $y = C_1\cos x + C_2 \sin x + y_p$ where $y_p = $, A:*a;$x\sin(x) + \cos(x)\ln|\cos(x)|$ b;$x\cos(x) - \sin(x)\ln|\cos(x)|$ c;$\sin(x)\ln|\cos(x)|$ d;$-x\cos(x) + \sin(x)\ln|\sin(x)|$}

{type:MC, Q:$\mathcal{L}^{-1}\!\left\{\frac{1}{s^2+4}\right\} = $, A:a;$\cos(2t)$ *b;$\frac{1}{2}\sin(2t)$ c;$\sin(2t)$ d;$\frac{1}{4}\sin(2t)$}

{type:MC, Q:$\mathcal{L}^{-1}\!\left\{\frac{s}{s^2+9}\right\} = $, A:a;$\frac{1}{3}\sin(3t)$ b;$\sin(3t)$ *c;$\cos(3t)$ d;$3\cos(3t)$}

{type:MC, Q:$\mathcal{L}^{-1}\!\left\{\frac{1}{(s-2)^2}\right\} = $, A:a;$e^{2t}$ b;$\frac{1}{2}e^{2t}$ *c;$te^{2t}$ d;$t^2 e^{2t}/2$}
