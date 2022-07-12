import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { Student } from 'models';

export interface DashboardStatistics {
  maleCount: number;
  femaleCount: number;
  highMarkCount: number;
  lowMarkCount: number;
}

export interface RankingByCity {
  cityId: string;
  cityName: string;
  rankingList: Student[];
}

export interface DashboardState {
  loading: boolean;
  statistics: DashboardStatistics;
  highestStudents: Student[];
  lowestStudents: Student[];
  rankingByCityList: RankingByCity[];
}

const initialState: DashboardState = {
  loading: false,
  statistics: {
    maleCount: 0,
    femaleCount: 0,
    highMarkCount: 0,
    lowMarkCount: 0,
  },
  highestStudents: [],
  lowestStudents: [],
  rankingByCityList: [],
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: initialState,
  reducers: {
    fetchData(state) {
      state.loading = true;
    },
    fetchDataSuccess(state) {
      state.loading = false;
    },
    fetchDataFailure(state) {
      state.loading = false;
    },

    setStatistics(state, action: PayloadAction<DashboardStatistics>) {
      state.statistics = action.payload;
    },
    setHighestStudents(state, action: PayloadAction<Student[]>) {
      state.highestStudents = action.payload;
    },
    setLowestStudents(state, action: PayloadAction<Student[]>) {
      state.lowestStudents = action.payload;
    },
    setRankingByCityList(state, action: PayloadAction<RankingByCity[]>) {
      state.rankingByCityList = action.payload;
    },
  },
});

// Actions
export const dashboardActions = dashboardSlice.actions;

// Selectors
export const selectDashboardLoading = (state: RootState) => state.dashboard.loading;
export const selectDashboardStatistics = (state: RootState) => state.dashboard.statistics;
export const selectHighestStudents = (state: RootState) => state.dashboard.highestStudents;
export const selectLowestStudents = (state: RootState) => state.dashboard.lowestStudents;
export const selectRankingByCityList = (state: RootState) => state.dashboard.rankingByCityList;

// Reducer
const dashboardReducer = dashboardSlice.reducer;
export default dashboardReducer;
