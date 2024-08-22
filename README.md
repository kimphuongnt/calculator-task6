# Redux
là thư viện mã nguồn mở, là 1 pattern, quản lý trạng thái phức tạp web, tách biệt logic và giao diện người dùng, theo dõi và cập nhật trạng thái hiệu quả, đảm bảo tính nhất quán cho dữ liệu trong ứng dụng.
### 3 thành phần của Redux:
-	Action
Hàm trả về 1 đối tượng và gửi dữ liệu đến store thông qua dispatch và reducer. Có 2 thuộc tính type (hành động) và payload (giá trị áp dụng để thay đổi trạng thái)
-	Reducer
Hàm thay đổi trạng thái của ứng dụng. Nhận 2 đối số: state và action, trả về 1 trạng thái mới. -> tạo ra 1 trạng thái mới cho store
-	Store
Là 1 đối tượng js, 1 kho chứa trung tâm quản lý trạng thái, truy cập từ toàn bộ ứng dụng, phải gửi action để truy cập vào store
### Redux Toolkit: 
Trong Redux Toolkit, các hàm chính bao gồm:
-	configureStore(): Hàm này được sử dụng để cấu hình global store của ứng dụng.
-	createAction(): Hàm này được sử dụng để tạo ra các action creators đơn giản hơn.
-	createReducer(): Hàm này được sử dụng để tạo reducers đơn giản hơn.
-	createSlice(): Hàm này tự động tạo ra các action creator và reducer dựa trên một slice (phần) của state.
-	createAsyncThunk(): Hàm này được sử dụng để tạo ra các async thunks trong Redux Toolkit.
-	createEntityAdapter(): Hàm này được sử dụng để xử lý dữ liệu thực thể (entity data) trong Redux Toolkit.

### Dùng Redux: 
1.	npm install @reduxjs/toolkit react-redux
2.	Tạo Slice bằng createSlice
3.	Tạo Store bằng configureStore
4.	Cung cấp Store bằng Provider
5.	Truy cập Redux State bằng useSelector
6.	Dispatch Action
