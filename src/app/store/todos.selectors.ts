import { createFeatureSelector } from "@ngrx/store";
import { todoState } from "./todos.reducer";

export const state = createFeatureSelector<todoState[]>("reducer");

