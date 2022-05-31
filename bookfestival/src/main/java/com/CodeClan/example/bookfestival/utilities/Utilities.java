package com.CodeClan.example.bookfestival.utilities;

import org.json.JSONObject;

public class Utilities {
    public static String checkIfNull(JSONObject object, String fieldName){
        if(object!=null && fieldName !=null){
            try
            {
                return object.getString(fieldName);
            }
            catch(Exception npe) {
                System.out.println("NOTE: error found: " + npe.getMessage());
                return "";
            }
        }
        else
        {
            return "";
        }
    }
}

