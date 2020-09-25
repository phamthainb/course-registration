package com.dangki.prerentation.controller.admin;

import com.dangki.data.dto.SubjectDto;
import com.dangki.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/api/subject")
public class SubjectController {
    @Autowired
    private SubjectService subjectService;

    @GetMapping
    public ResponseEntity<List<SubjectDto>> getSubject()
    {
        return ResponseEntity.ok(subjectService.findAll());
    }
    @PostMapping
    public ResponseEntity<?> add(@RequestBody SubjectDto subjectDto)
    {
        return ResponseEntity.ok(subjectService.add(subjectDto));
    }
    @PutMapping
    public ResponseEntity<?> update(@RequestBody SubjectDto subjectDto)
    {
        return ResponseEntity.ok(subjectService.update(subjectDto));
    }
    @DeleteMapping
    public void delete(@RequestBody List<SubjectDto> subjectDtos)
    {
        subjectService.delete(subjectDtos);
    }
}
