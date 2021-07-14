package sampleJSONtoXLStoCSV;

import static io.restassured.RestAssured.given;

import java.io.File;
import java.io.IOException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;

//import org.jsontocsv.parser.JSONFlattener;
//import org.jsontocsv.writer.CSVWriter;
public class APIJSONtoCSV {

	public static void main(String[] args) {

		// Using Cucumber/BDD framework approach...

		String response = given().auth().none().when().get("https://data.sfgov.org/resource/p4e4-a5a7.json").andReturn()
				.then().statusCode(200).extract().asString();

		// While using below code 28 to 41- complete data is displayed in csv
		// but in raw format, currently it's commented...

		// File fileObj = new File("src/main/resources/leads.xls");
		//
		// try {
		// if(fileObj.createNewFile()) {
		// FileWriter myWriter = new FileWriter("src/main/resources/leads.xls");
		// myWriter.write(response);
		// myWriter.close();
		// }else {
		// System.out.println("Failed");
		// }
		// } catch (IOException e) {
		// // TODO Auto-generated catch block
		// e.printStackTrace();
		// }

		try {
			ObjectMapper mapper = new ObjectMapper();
			JsonNode jsonNode = mapper.readValue(response, JsonNode.class);
			// JsonNode jsonTree = new ObjectMapper().readTree(response);
			final com.fasterxml.jackson.dataformat.csv.CsvSchema.Builder csvSchemaBuilder = CsvSchema.builder();
			JsonNode firstObject = jsonNode.elements().next();
			firstObject.fieldNames().forEachRemaining(fieldName -> {
				csvSchemaBuilder.addColumn(fieldName);
			});
			CsvSchema xls = csvSchemaBuilder.build().withHeader();
			CsvMapper csvMapper = new CsvMapper();
			csvMapper.writerFor(JsonNode.class).with(xls).writeValue(new File("src/main/resources/leads.xls"),
					jsonNode);
			System.out.print("JSON Created");
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}
}
