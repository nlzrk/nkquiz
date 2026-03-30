# Matrix Algebra

Topics include matrix operations, determinants, inverses, linear systems, eigenvalues and eigenvectors, rank, and diagonalization. 10 questions drawn randomly from a bank of 100.

{bank:10}

---

{type:MC, Q:If $A$ is a $3 \times 4$ matrix and $B$ is a $4 \times 2$ matrix, the product $AB$ has dimensions:, A:a;$4 \times 4$ b;$3 \times 2$ but only if compatible *c;$3 \times 2$ d;$4 \times 2$}

{type:MC, Q:Matrix multiplication is:, A:*a;Associative but generally not commutative b;Both associative and commutative c;Commutative but not associative d;Neither associative nor commutative}

{type:MC, Q:The transpose of a product satisfies $(AB)^T = $, A:a;$A^T B^T$ *b;$B^T A^T$ c;$AB$ d;$(A^T)(B^T)^{-1}$}

{type:MC, Q:A square matrix $A$ is symmetric if:, A:a;$A = A^{-1}$ *b;$A = A^T$ c;$A^2 = I$ d;$A = -A^T$}

{type:MC, Q:A square matrix $A$ is skew-symmetric if:, A:a;$A = A^T$ *b;$A = -A^T$ c;$A^2 = -I$ d;$A = A^{-1}$}

{type:MC, Q:The trace of a square matrix $A$ is defined as:, A:a;The product of diagonal entries b;The sum of all entries *c;The sum of diagonal entries d;The largest eigenvalue}

{type:MC, Q:If $A$ is $n \times n$, then $\det(cA) = $, A:a;$c \cdot \det(A)$ b;$c^2 \det(A)$ *c;$c^n \det(A)$ d;$\det(A)$}

{type:MC, Q:What is $\det\begin{pmatrix}3 & 1 \\ 2 & 4\end{pmatrix}$?, A:a;$10$ *b;$10$ c;$14$ d;$5$}

{type:MC, Q:What is $\det\begin{pmatrix}2 & 1 \\ 5 & 3\end{pmatrix}$?, A:a;$11$ *b;$1$ c;$-1$ d;$6$}

{type:MC, Q:What is $\det\begin{pmatrix}1 & 2 & 0 \\ 3 & 4 & 0 \\ 5 & 6 & 7\end{pmatrix}$?, A:a;$14$ b;$-14$ *c;$-14$ d;$0$}

{type:MC, Q:If a matrix has two identical rows, its determinant is:, A:a;$1$ b;Undefined *c;$0$ d;Equal to the sum of all entries}

{type:MC, Q:Swapping two rows of a matrix multiplies its determinant by:, A:a;$2$ b;$0$ *c;$-1$ d;$1$}

{type:MC, Q:$\det(AB) = $, A:a;$\det(A) + \det(B)$ b;$\det(A) - \det(B)$ *c;$\det(A)\det(B)$ d;$\det(A)/\det(B)$}

{type:MC, Q:$\det(A^{-1}) = $, A:a;$-\det(A)$ b;$\det(A)$ *c;$\frac{1}{\det(A)}$ d;$\det(A^T)$}

{type:MC, Q:A square matrix $A$ is invertible if and only if:, A:a;$\text{tr}(A) \neq 0$ *b;$\det(A) \neq 0$ c;All entries are nonzero d;$A$ is symmetric}

{type:MC, Q:The inverse of $\begin{pmatrix}a & b \\ c & d\end{pmatrix}$ is:, A:a;$\frac{1}{ad+bc}\begin{pmatrix}d & -b \\ -c & a\end{pmatrix}$ *b;$\frac{1}{ad-bc}\begin{pmatrix}d & -b \\ -c & a\end{pmatrix}$ c;$\begin{pmatrix}d & -b \\ -c & a\end{pmatrix}$ d;$\frac{1}{ad-bc}\begin{pmatrix}a & -c \\ -b & d\end{pmatrix}$}

{type:MC, Q:Find the inverse of $A = \begin{pmatrix}1 & 2 \\ 3 & 7\end{pmatrix}$., A:a;$\begin{pmatrix}7 & -2 \\ -3 & 1\end{pmatrix}$ *b;$\begin{pmatrix}7 & -2 \\ -3 & 1\end{pmatrix}$ c;$\begin{pmatrix}7 & 2 \\ 3 & 1\end{pmatrix}$ d;$\begin{pmatrix}-7 & 2 \\ 3 & -1\end{pmatrix}$}

{type:MC, Q:$(AB)^{-1} = $, A:a;$A^{-1}B^{-1}$ *b;$B^{-1}A^{-1}$ c;$A^{-1}+B^{-1}$ d;$(BA)^{-1}$}

{type:MC, Q:An orthogonal matrix $Q$ satisfies:, A:a;$Q = Q^T$ b;$Q^T = Q^{-1}$ *c;$Q^T Q = I$ d;$\det(Q) = 0$}

{type:SA, Q:Find the inverse of $A = \begin{pmatrix}2 & 1 \\ 5 & 3\end{pmatrix}$., A:$A^{-1} = \begin{pmatrix}3 & -1 \\ -5 & 2\end{pmatrix}$, M:3}

{type:MC, Q:The row echelon form of a matrix is achieved by:, A:*a;Gaussian elimination b;Computing the determinant c;Transposing the matrix d;Finding eigenvalues}

{type:MC, Q:The system $A\mathbf{x} = \mathbf{b}$ has a unique solution when:, A:a;$A$ is square b;$\mathbf{b} \neq \mathbf{0}$ *c;$\det(A) \neq 0$ d;$A$ is in row echelon form}

{type:MC, Q:The system $A\mathbf{x} = \mathbf{0}$ always has the solution:, A:a;$\mathbf{x} = A^{-1}$ b;$\mathbf{x} = \mathbf{b}$ *c;$\mathbf{x} = \mathbf{0}$ d;No solution in general}

{type:MC, Q:A homogeneous system $A\mathbf{x} = \mathbf{0}$ has infinitely many solutions when:, A:a;$A$ is invertible *b;$A$ is singular (not invertible) c;$\mathbf{b} \neq \mathbf{0}$ d;$A$ has no zero rows}

{type:MC, Q:Cramer's rule gives the solution $x_i = $, A:*a;$\frac{\det(A_i)}{\det(A)}$ b;$\frac{\det(A)}{\det(A_i)}$ c;$\det(A_i)\det(A)$ d;$\det(A_i) - \det(A)$}

{type:MC, Q:The rank of a matrix is defined as:, A:a;The number of rows b;The number of columns *c;The number of linearly independent rows (or columns) d;The number of zero rows in RREF}

{type:MC, Q:For an $m \times n$ matrix $A$, the rank-nullity theorem states:, A:a;$\text{rank}(A) = m$ b;$\text{null}(A) = n$ *c;$\text{rank}(A) + \text{nullity}(A) = n$ d;$\text{rank}(A) + \text{nullity}(A) = m$}

{type:MC, Q:The nullity of a matrix is the dimension of its:, A:a;Column space b;Row space *c;Null space d;Eigenspace}

{type:MC, Q:The column space of matrix $A$ is also called:, A:*a;The range of $A$ b;The kernel of $A$ c;The null space of $A$ d;The eigenspace of $A$}

{type:MC, Q:A set of vectors $\{v_1, \ldots, v_k\}$ is linearly independent if:, A:a;Each vector is a unit vector b;The vectors are mutually orthogonal *c;The only solution to $c_1 v_1 + \cdots + c_k v_k = \mathbf{0}$ is all $c_i = 0$ d;The determinant of the matrix they form is $1$}

{type:SA, Q:What is the rank of $A = \begin{pmatrix}1 & 2 & 3 \\ 2 & 4 & 6 \\ 0 & 1 & 1\end{pmatrix}$?, A:2, M:2}

{type:MC, Q:If $A\mathbf{v} = \lambda \mathbf{v}$ with $\mathbf{v} \neq \mathbf{0}$, then $\lambda$ is called:, A:a;A singular value b;A trace component *c;An eigenvalue d;A cofactor}

{type:MC, Q:To find eigenvalues of $A$, you solve:, A:a;$A\mathbf{v} = \mathbf{0}$ *b;$\det(A - \lambda I) = 0$ c;$\det(A) = \lambda$ d;$A - \lambda I = 0$}

{type:MC, Q:Find the eigenvalues of $A = \begin{pmatrix}2 & 0 \\ 0 & 5\end{pmatrix}$., A:a;$\lambda = 2, 5$ and eigenvalues equal trace *b;$\lambda = 2$ and $\lambda = 5$ c;$\lambda = 10$ d;$\lambda = 7$}

{type:MC, Q:Find the eigenvalues of $A = \begin{pmatrix}1 & 2 \\ 2 & 1\end{pmatrix}$., A:a;$\lambda = 1, 1$ b;$\lambda = 0, 2$ *c;$\lambda = 3, -1$ d;$\lambda = 1, 4$}

{type:MC, Q:The characteristic polynomial of $A = \begin{pmatrix}3 & 1 \\ 0 & 3\end{pmatrix}$ is:, A:a;$(\lambda-3)(\lambda+1)$ *b;$(\lambda-3)^2$ c;$\lambda^2 - 9$ d;$\lambda^2 - 6\lambda + 8$}

{type:MC, Q:For an upper triangular matrix, the eigenvalues are:, A:a;The off-diagonal entries b;The row sums *c;The diagonal entries d;The square roots of the diagonal entries}

{type:MC, Q:The sum of the eigenvalues of $A$ equals:, A:a;$\det(A)$ *b;$\text{tr}(A)$ c;$\|A\|$ d;The largest entry of $A$}

{type:MC, Q:The product of the eigenvalues of $A$ equals:, A:a;$\text{tr}(A)$ *b;$\det(A)$ c;$0$ d;The sum of all entries}

{type:MC, Q:Find the eigenvalues of $A = \begin{pmatrix}0 & -1 \\ 1 & 0\end{pmatrix}$., A:a;$\lambda = 0, 1$ b;$\lambda = 1, -1$ *c;$\lambda = i, -i$ d;$\lambda = 0$}

{type:SA, Q:Find the eigenvalues and corresponding eigenvectors of $A = \begin{pmatrix}4 & 1 \\ 0 & 3\end{pmatrix}$., A:Eigenvalues: $\lambda_1=4$ with eigenvector $(1,\,0)^T$; $\lambda_2=3$ with eigenvector $(-1,\,1)^T$, M:4}

{type:MC, Q:Eigenvectors corresponding to distinct eigenvalues are:, A:a;Parallel b;Orthogonal *c;Linearly independent d;All unit vectors}

{type:MC, Q:A matrix $A$ is diagonalizable if and only if:, A:a;It is symmetric b;It has real eigenvalues *c;It has $n$ linearly independent eigenvectors d;Its determinant is nonzero}

{type:MC, Q:If $A = PDP^{-1}$, then $A^k = $, A:a;$P^k D^k P^{-k}$ *b;$PD^kP^{-1}$ c;$P^k D (P^{-1})^k$ d;$D^k$}

{type:MC, Q:Every real symmetric matrix is:, A:a;Singular b;The identity *c;Diagonalizable with real eigenvalues d;An orthogonal matrix}

{type:MC, Q:The Spectral Theorem states that every real symmetric matrix $A$ can be written as $A = $, A:a;$LU$ b;$QR$ *c;$Q\Lambda Q^T$ where $Q$ is orthogonal and $\Lambda$ is diagonal d;$PDP^{-1}$ where $P$ is not necessarily orthogonal}

{type:MC, Q:A matrix $A$ is positive definite if:, A:a;All entries are positive b;$\det(A) > 0$ *c;All eigenvalues are positive d;$A$ is diagonal with positive entries}

{type:MC, Q:The $LU$ decomposition writes $A$ as:, A:a;An orthogonal times a symmetric matrix *b;A lower triangular times an upper triangular matrix c;A diagonal times an orthogonal matrix d;A symmetric times an invertible matrix}

{type:MC, Q:Gaussian elimination on $A$ to solve $A\mathbf{x} = \mathbf{b}$ works by forming:, A:a;The inverse of $A$ directly *b;The augmented matrix $[A | \mathbf{b}]$ and reducing to RREF c;The characteristic polynomial d;The transpose of $A$}

{type:SA, Q:State the rank-nullity theorem for an $m \times n$ matrix $A$., A:$\text{rank}(A) + \text{nullity}(A) = n$, M:2}

{type:MC, Q:The null space of a matrix $A$ consists of all vectors $\mathbf{x}$ such that:, A:a;$A\mathbf{x} = \mathbf{b}$ for some $\mathbf{b}$ b;$\mathbf{x} = A\mathbf{b}$ *c;$A\mathbf{x} = \mathbf{0}$ d;$A^T\mathbf{x} = \mathbf{0}$}

{type:MC, Q:If $A$ is $4 \times 6$ with rank $3$, then the nullity of $A$ is:, A:a;$1$ b;$3$ *c;$3$ d;$4$}

{type:MC, Q:If $A$ is $4 \times 6$ with rank $3$, the nullity is:, A:a;$1$ b;$2$ *c;$3$ d;$4$}

{type:MC, Q:Two vectors $\mathbf{u}$ and $\mathbf{v}$ in $\mathbb{R}^n$ are orthogonal if:, A:*a;$\mathbf{u} \cdot \mathbf{v} = 0$ b;$\mathbf{u} + \mathbf{v} = \mathbf{0}$ c;$\|\mathbf{u}\| = \|\mathbf{v}\|$ d;$\mathbf{u} = c\mathbf{v}$ for some scalar $c$}

{type:MC, Q:The Gram-Schmidt process is used to:, A:a;Find eigenvalues b;Compute the determinant *c;Convert a linearly independent set into an orthonormal basis d;Solve a linear system}

{type:MC, Q:The projection of $\mathbf{b}$ onto $\mathbf{a}$ is:, A:a;$\frac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{b}|^2}\mathbf{a}$ *b;$\frac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}|^2}\mathbf{a}$ c;$(\mathbf{a} \cdot \mathbf{b})\mathbf{b}$ d;$\frac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}||\mathbf{b}|}\mathbf{a}$}

{type:MC, Q:The least-squares solution to $A\mathbf{x} = \mathbf{b}$ satisfies the normal equations:, A:a;$A\mathbf{x} = \mathbf{b}$ b;$A^T\mathbf{b} = 0$ *c;$A^T A \mathbf{x} = A^T \mathbf{b}$ d;$AA^T\mathbf{x} = \mathbf{b}$}

{type:MC, Q:The $QR$ decomposition writes a matrix $A$ as:, A:a;A diagonal times an upper triangular matrix b;A lower times an upper triangular matrix *c;An orthogonal matrix $Q$ times an upper triangular matrix $R$ d;An orthogonal matrix $Q$ times a diagonal matrix}

{type:SA, Q:Explain what it means for a set of vectors to span a subspace., A:A set of vectors spans a subspace if every vector in the subspace can be written as a linear combination of those vectors., M:2}

{type:MC, Q:A basis for a vector space $V$ is a set that is:, A:a;Orthogonal and spans $V$ b;As large as possible *c;Linearly independent and spans $V$ d;Contains only unit vectors}

{type:MC, Q:The dimension of a vector space $V$ is:, A:a;The number of vectors in any spanning set b;The largest number of vectors in $V$ *c;The number of vectors in any basis of $V$ d;The rank plus the nullity}

{type:MC, Q:Which of the following is a subspace of $\mathbb{R}^3$?, A:a;$\{(x,y,z) : x+y+z = 1\}$ *b;$\{(x,y,z) : x + y = 0\}$ c;$\{(x,y,z) : x^2 + y^2 = 1\}$ d;$\{(x,y,z) : x > 0\}$}

{type:MC, Q:The dimension of the solution space of $A\mathbf{x} = \mathbf{0}$ where $A$ is $3 \times 5$ with rank $2$ is:, A:a;$2$ b;$1$ *c;$3$ d;$5$}

{type:MC, Q:If $A$ and $B$ are both $n \times n$ invertible matrices, $(AB)^T$ equals:, A:a;$A^T B^T$ b;$B^T A^{-T}$ *c;$B^T A^T$ d;$A^{-T} B^T$}

{type:MC, Q:A matrix is idempotent if:, A:a;$A = A^T$ *b;$A^2 = A$ c;$A^2 = I$ d;$A^{-1} = A^T$}

{type:MC, Q:If $\lambda$ is an eigenvalue of $A$, then $\lambda^2$ is an eigenvalue of:, A:a;$2A$ b;$A + A^T$ *c;$A^2$ d;$A^{-1}$}

{type:MC, Q:The minimal polynomial of a matrix $A$ divides:, A:a;$\det(A)$ *b;The characteristic polynomial of $A$ c;$\text{tr}(A)$ d;The identity polynomial}

{type:MC, Q:The Cayley-Hamilton theorem states that:, A:a;Every matrix has real eigenvalues b;Symmetric matrices are diagonalizable *c;Every matrix satisfies its own characteristic equation d;$\det(A) = \text{tr}(A)$ for $2\times2$ matrices}

{type:MC, Q:Two matrices $A$ and $B$ are similar if there exists an invertible matrix $P$ such that:, A:a;$PA = BP$ b;$AB = BA$ *c;$B = P^{-1}AP$ d;$A = B + P$}

{type:MC, Q:Similar matrices have the same:, A:a;Eigenvectors b;Entries *c;Eigenvalues d;Inverse}

{type:MC, Q:An $n \times n$ matrix has at most how many distinct eigenvalues?, A:a;$n-1$ b;$n^2$ *c;$n$ d;$2n$}

{type:MC, Q:The geometric multiplicity of eigenvalue $\lambda$ is:, A:a;The number of times $\lambda$ appears as a root of the characteristic polynomial b;$\det(A - \lambda I)$ *c;The dimension of the eigenspace associated with $\lambda$ d;Always equal to the algebraic multiplicity}

{type:MC, Q:A matrix is diagonalizable if and only if for each eigenvalue, its geometric multiplicity:, A:a;Is zero b;Is less than the algebraic multiplicity *c;Equals the algebraic multiplicity d;Is greater than the algebraic multiplicity}

{type:SA, Q:State the Spectral Theorem for real symmetric matrices., A:Every real symmetric matrix is orthogonally diagonalizable: $A = Q\Lambda Q^T$ where $Q$ is orthogonal and $\Lambda$ is a diagonal matrix of real eigenvalues., M:3}

{type:MC, Q:The singular value decomposition (SVD) of an $m \times n$ matrix $A$ writes it as:, A:a;$PDP^{-1}$ b;$LU$ *c;$U\Sigma V^T$ where $U, V$ are orthogonal and $\Sigma$ is diagonal d;$QR$}

{type:MC, Q:The singular values of $A$ are the square roots of the eigenvalues of:, A:a;$A$ b;$A^T$ *c;$A^T A$ d;$A + A^T$}

{type:MC, Q:The Moore-Penrose pseudoinverse $A^+$ of a matrix $A$ is used to:, A:a;Compute the determinant b;Find the nearest orthogonal matrix *c;Find the least-squares solution to $A\mathbf{x} = \mathbf{b}$ d;Diagonalize $A$}

{type:MC, Q:The matrix $P = A(A^TA)^{-1}A^T$ is the orthogonal projection onto:, A:a;The null space of $A$ *b;The column space of $A$ c;The row space of $A$ d;The left null space of $A$}

{type:MC, Q:The four fundamental subspaces of an $m \times n$ matrix $A$ are:, A:a;Row space, column space, eigenspace, null space *b;Row space, column space, null space, left null space c;Column space, null space, diagonal space, trace space d;Eigenspace, null space, kernel, range}

{type:SA, Q:Define what it means for an $n \times n$ matrix to be positive definite., A:An $n \times n$ symmetric matrix $A$ is positive definite if $\mathbf{x}^T A \mathbf{x} > 0$ for all nonzero vectors $\mathbf{x} \in \mathbb{R}^n$, or equivalently if all eigenvalues of $A$ are positive., M:3}

{type:MC, Q:The norm of a vector $\mathbf{v} = (v_1, \ldots, v_n)$ is:, A:a;$\sum_i v_i$ b;$\max_i |v_i|$ *c;$\sqrt{\sum_i v_i^2}$ d;$\prod_i v_i$}

{type:MC, Q:The Cauchy-Schwarz inequality states:, A:a;$\|\mathbf{u} + \mathbf{v}\| \leq \|\mathbf{u}\| + \|\mathbf{v}\|$ *b;$|\mathbf{u} \cdot \mathbf{v}| \leq \|\mathbf{u}\| \cdot \|\mathbf{v}\|$ c;$\|\mathbf{u} \cdot \mathbf{v}\| \geq \|\mathbf{u}\| \cdot \|\mathbf{v}\|$ d;$\mathbf{u} \cdot \mathbf{v} = \|\mathbf{u}\| + \|\mathbf{v}\|$}

{type:MC, Q:A matrix $A$ is nilpotent if:, A:a;$A = 0$ *b;$A^k = 0$ for some positive integer $k$ c;$A^2 = A$ d;All eigenvalues are zero and $A \neq 0$}

{type:MC, Q:If $A$ is nilpotent, all its eigenvalues are:, A:a;$1$ b;$-1$ *c;$0$ d;Real and positive}

{type:MC, Q:A matrix is in Jordan normal form when it is:, A:a;Diagonal b;Upper triangular *c;Block diagonal with Jordan blocks d;Symmetric}

{type:MC, Q:The Jordan block $J_k(\lambda)$ is a $k \times k$ matrix with $\lambda$ on the diagonal and:, A:a;$0$ on the superdiagonal *b;$1$ on the superdiagonal c;$\lambda$ on the superdiagonal d;$-1$ on the subdiagonal}

{type:SA, Q:Given $A = \begin{pmatrix}1 & 0 \\ 0 & -2\end{pmatrix}$, compute $A^3$., A:$\begin{pmatrix}1 & 0 \\ 0 & -8\end{pmatrix}$, M:2}

{type:MC, Q:The Frobenius norm of a matrix $A$ is defined as:, A:a;The largest singular value of $A$ b;The largest eigenvalue of $A$ *c;$\sqrt{\sum_{i,j} a_{ij}^2}$ d;$\sqrt{\det(A^T A)}$}

{type:MC, Q:If $A$ is orthogonal, then $\det(A) = $, A:a;$0$ b;$2$ *c;$\pm 1$ d;Any real number}

{type:MC, Q:The change of basis matrix $P$ from basis $B$ to standard basis relates coordinates by:, A:a;$[\mathbf{v}]_B = P[\mathbf{v}]_S$ *b;$[\mathbf{v}]_S = P[\mathbf{v}]_B$ c;$[\mathbf{v}]_S = P^T[\mathbf{v}]_B$ d;$[\mathbf{v}]_B = P^{-T}[\mathbf{v}]_S$}

{type:MC, Q:Markov matrices (stochastic matrices) always have eigenvalue:, A:a;$0$ b;$-1$ *c;$1$ d;Equal to the trace}

{type:SA, Q:What is the relationship between the eigenvalues of $A$ and $A^{-1}$ (assuming $A$ is invertible)?, A:If $\lambda$ is an eigenvalue of $A$, then $1/\lambda$ is an eigenvalue of $A^{-1}$., M:2}
