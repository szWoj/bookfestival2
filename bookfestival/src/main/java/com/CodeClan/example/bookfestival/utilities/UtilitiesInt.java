package com.CodeClan.example.bookfestival.utilities;

import org.json.JSONObject;

public class UtilitiesInt {public static int checkIfNull(JSONObject object, String fieldName){
    if(object!=null && fieldName !=null){
        try
        {
            return object.getInt(fieldName);
        }
        catch(Exception npe) {
            System.out.println("NOTE: error found: " + npe.getMessage());
            return 0;
        }
    }
    else
    {
        return 0;
    }
}
}

