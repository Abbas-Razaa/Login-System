const initialState = {
  users: [
    { id: 1, name: "John Doe", email: "admin@gmail.com", password: "admin123", role: "admin", date: "23/09/2022", isActive: true },
    { id: 2, name: "Jane Smith", email: "jane@gmail.com", password: "jane123", role: "user", date: "23/09/2022", isActive: true },
    { id: 3, name: "Michael Brown", email: "michael@gmail.com", password: "michael123", role: "user", date: "24/09/2022", isActive: false },
    { id: 4, name: "Emily Johnson", email: "emily@gmail.com", password: "emily123", role: "user", date: "24/09/2022", isActive: true },
    { id: 5, name: "Chris Davis", email: "chris@gmail.com", password: "chris123", role: "user", date: "25/09/2022", isActive: false },
    { id: 6, name: "Sarah Wilson", email: "sarah@gmail.com", password: "sarah123", role: "user", date: "25/09/2022", isActive: true },
    { id: 7, name: "Daniel Garcia", email: "daniel@gmail.com", password: "daniel123", role: "user", date: "26/09/2022", isActive: false },
    { id: 8, name: "Jessica Martinez", email: "jessica@gmail.com", password: "jessica123", role: "user", date: "26/09/2022", isActive: true },
    { id: 9, name: "David Anderson", email: "david@gmail.com", password: "david123", role: "user", date: "27/09/2022", isActive: false },
    { id: 10, name: "Laura Taylor", email: "laura@gmail.com", password: "laura123", role: "user", date: "27/09/2022", isActive: true },
  ],
  currentUser: null,
  loginError: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER": {
      const { email, password } = action.payload;

      const user = state.users.find((u) => u.email === email && u.password === password);

      if (!user) {
        return { ...state, loginError: "Invalid email or password." };
      }

      if (!user.isActive) {
        return { ...state, loginError: "Your account is deactivated. Please contact support." };
      }

      return { ...state, currentUser: user, loginError: null };
    }

  
    case "LOGOUT_USER":
      return { ...state, currentUser: null };

    
    case "UPDATE_USER": {
      const updatedUsers = state.users.map((user) =>
        user.id === action.payload.id ? { ...user, ...action.payload } : user
      );

      return { ...state, users: updatedUsers };
    }

    
    case "DELETE_USER": {
      const updatedUsers = state.users.filter((user) => user.id !== action.payload);

      return { ...state, users: updatedUsers };
    }

    
    case "ADD_USER": {
      const updatedUsers = [...state.users, action.payload];

      return { ...state, users: updatedUsers };
    }

  
    case "TOGGLE_USER_STATUS": {
      const updatedUsers = state.users.map((user) =>
        user.id === action.payload ? { ...user, isActive: !user.isActive } : user
      );

      return { ...state, users: updatedUsers };
    }

    default:
      return state;
  }
};

export default userReducer;
